'use client';

import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { gsap } from 'gsap';
import { Vector3 } from 'three';
import { useUniverse, selectionState } from '@/store/universe';
import { cameraTarget } from '@/lib/scene-layout';

export default function CameraController() {
  const ref = useRef<OrbitControlsImpl>(null);
  const camera = useThree(s => s.camera);
  const width = useThree(s => s.size.width);
  const selection = useUniverse(s => s.selection);
  const revision = useUniverse(s => s.revision);
  const reduced = useUniverse(s => s.reducedMotion);

  useEffect(() => {
    const controls = ref.current;
    if (!controls) return;
    const { target, radius } = cameraTarget(selection);
    const mobile = width < 700;
    const distance = radius * (mobile ? 1.25 : 1);
    // Frame the focused object in the space left by the sidebar or mobile detail drawer.
    const focus = new Vector3(...target);
    if (mobile && !selection.provider) focus.set(3.2, 3.6, 0);
    if (selection.model) {
      if (mobile) focus.y -= radius * 0.28;
      else focus.x += radius * 0.3;
    }
    const end = focus.clone().add(new Vector3(0, distance * 0.18, distance * 1.65));
    const duration = reduced ? 0.05 : 1.8;
    const transition = gsap.timeline({
      onStart: () => useUniverse.setState({ cameraState: 'TRANSITION' }),
      onComplete: () => useUniverse.setState({ cameraState: selection.model ? 'DETAIL' : selectionState(selection) }),
    });
    transition.to(camera.position, { x: end.x, y: end.y, z: end.z, duration, ease: 'power3.inOut' }, 0);
    transition.to(controls.target, { x: focus.x, y: focus.y, z: focus.z, duration, ease: 'power3.inOut', onUpdate: () => controls.update() }, 0);
    const cancel = () => { transition.kill(); useUniverse.setState({ cameraState: selectionState(selection) }); };
    controls.addEventListener('start', cancel);
    return () => { transition.kill(); controls.removeEventListener('start', cancel); };
  }, [camera, selection, revision, reduced, width]);

  useEffect(() => {
    const zoom = (event: Event) => {
      const controls = ref.current;
      if (!controls) return;
      const factor = (event as CustomEvent<number>).detail;
      const offset = camera.position.clone().sub(controls.target).multiplyScalar(factor).clampLength(2.5, 100);
      camera.position.copy(controls.target).add(offset);
      controls.update();
    };
    window.addEventListener('universe:zoom', zoom);
    return () => window.removeEventListener('universe:zoom', zoom);
  }, [camera]);

  return <OrbitControls ref={ref} makeDefault enablePan={false} enableDamping dampingFactor={0.065} rotateSpeed={0.3}
    zoomSpeed={0.5} minDistance={2.5} maxDistance={100} minPolarAngle={0.35} maxPolarAngle={Math.PI - 0.35} />;
}
