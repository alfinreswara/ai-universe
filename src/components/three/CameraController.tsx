'use client';
import { useEffect,useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { gsap } from 'gsap';
import { Vector3 } from 'three';
import { useUniverse,selectionState } from '@/store/universe';
import { cameraTarget } from '@/lib/scene-layout';
export default function CameraController(){const ref=useRef<OrbitControlsImpl>(null);const camera=useThree(s=>s.camera);const width=useThree(s=>s.size.width);const selection=useUniverse(s=>s.selection),revision=useUniverse(s=>s.revision),reduced=useUniverse(s=>s.reducedMotion),entered=useUniverse(s=>s.entered);
 useEffect(()=>{const controls=ref.current;if(!controls)return;const {target,radius}=cameraTarget(selection);const ratio=width<700?1.65:1;const distance=radius*ratio*(entered?1:1.16);const end=new Vector3(target[0],target[1]+distance*.18,target[2]+distance*1.65);const t=gsap.timeline({onStart:()=>useUniverse.setState({cameraState:'TRANSITION'}),onComplete:()=>useUniverse.setState({cameraState:selection.model?'DETAIL':selectionState(selection)})});t.to(camera.position,{x:end.x,y:end.y,z:end.z,duration:reduced?.05:1.8,ease:'power3.inOut'},0);t.to(controls.target,{x:target[0],y:target[1],z:target[2],duration:reduced?.05:1.8,ease:'power3.inOut',onUpdate:()=>controls.update()},0);const cancel=()=>{t.kill();useUniverse.setState({cameraState:selectionState(selection)})};controls.addEventListener('start',cancel);return()=>{t.kill();controls.removeEventListener('start',cancel)};},[camera,selection,revision,reduced,entered,width]);
 useEffect(()=>{const zoom=(event:Event)=>{const controls=ref.current;if(!controls)return;const factor=(event as CustomEvent<number>).detail;const offset=camera.position.clone().sub(controls.target).multiplyScalar(factor);offset.clampLength(2.5,100);camera.position.copy(controls.target).add(offset);controls.update();};window.addEventListener('universe:zoom',zoom);return()=>window.removeEventListener('universe:zoom',zoom);},[camera]);
 return <OrbitControls ref={ref} makeDefault enablePan={false} enableDamping dampingFactor={.07} rotateSpeed={.32} zoomSpeed={.55} minDistance={2.5} maxDistance={100} minPolarAngle={.35} maxPolarAngle={Math.PI-.35}/>;
}
