'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { AdditiveBlending, Color, DoubleSide, Group, MathUtils, ShaderMaterial } from 'three';
import { qualitySettings, seededRandom } from '@/lib/scene-layout';
import { useUniverse } from '@/store/universe';
import CelestialBody from './CelestialBody';

const ringVertex = `
  varying vec3 vPosition;
  void main() {
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const ringFragment = `
  uniform vec3 tint;
  uniform float opacity;
  varying vec3 vPosition;
  void main() {
    float r = length(vPosition.xy);
    float footprint = fwidth(r);
    float bands = sin(r * 43.0) * 0.18 * exp(-footprint * 43.0) + sin(r * 113.0) * 0.12 * exp(-footprint * 113.0) + 0.54;
    float edge = smoothstep(1.95, 2.16, r) * (1.0 - smoothstep(3.7, 4.25, r));
    float gap = 1.0 - smoothstep(0.025, 0.08, abs(r - 3.12));
    float light = 0.52 + 0.48 * smoothstep(-3.0, 3.0, vPosition.x);
    gl_FragColor = vec4(mix(tint, vec3(0.8, 0.9, 1.0), bands * 0.3), bands * edge * light * (1.0 - gap * 0.88) * opacity);
  }
`;

export default function Galaxy({ color, seed, signature, dim = false, active = false, hero = false }: {
  color: string; seed: number; signature: string; dim?: boolean; active?: boolean; hero?: boolean;
}) {
  const quality = useUniverse(s => s.quality);
  const reduced = useUniverse(s => s.reducedMotion);
  const particles = useRef<Group>(null);
  const ring = useRef<ShaderMaterial>(null);
  const uniforms = useMemo(() => ({ tint: { value: new Color(color) }, opacity: { value: 0.6 } }), [color]);
  const { positions, colors } = useMemo(() => {
    const random = seededRandom(seed + 42);
    const count = Math.floor(qualitySettings[quality].dust * (hero ? 1 : 0.35));
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const tint = new Color(color);
    for (let i = 0; i < count; i++) {
      const radius = 2.3 + Math.pow(random(), 0.65) * 3.1;
      const angle = random() * Math.PI * 2;
      positions.set([Math.cos(angle) * radius, (random() - 0.5) * 0.15, Math.sin(angle) * radius], i * 3);
      const star = tint.clone().lerp(new Color('#ffffff'), random() * 0.65).multiplyScalar(0.35 + random() * 0.65);
      colors.set([star.r, star.g, star.b], i * 3);
    }
    return { positions, colors };
  }, [quality, seed, color, hero]);

  useFrame((_, delta) => {
    if (particles.current && !reduced) particles.current.rotation.y += delta * 0.018;
    if (ring.current) ring.current.uniforms.opacity.value = MathUtils.damp(ring.current.uniforms.opacity.value, dim ? 0.06 : active ? 0.8 : 0.58, 4, delta);
  });

  return <group>
    <CelestialBody color={color} seed={seed} gas={signature === 'elliptical'} dim={dim} />
    <group rotation={[0.38 + (seed % 3) * 0.16, 0.15, hero ? -0.34 : 0.25 + seed * 0.025]}>
      {(hero || signature === 'ring') && <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.95, 4.25, quality === 'LOW' ? 96 : 192]} />
        <shaderMaterial ref={ring} uniforms={uniforms} vertexShader={ringVertex} fragmentShader={ringFragment} transparent side={DoubleSide} depthWrite={false} />
      </mesh>}
      <group ref={particles}>
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            <bufferAttribute attach="attributes-color" args={[colors, 3]} />
          </bufferGeometry>
          <pointsMaterial vertexColors size={hero ? 0.025 : 0.035} transparent opacity={dim ? 0.05 : 0.62} depthWrite={false} blending={AdditiveBlending} />
        </points>
        {(hero ? [4.7, 5.35] : [3.1]).map((radius, i) => <group key={radius}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[radius, radius + 0.008, 160]} />
            <meshBasicMaterial color={color} transparent opacity={dim ? 0.02 : 0.2} side={DoubleSide} depthWrite={false} />
          </mesh>
          <mesh position={[Math.cos(i * 2.7 + seed) * radius, 0, Math.sin(i * 2.7 + seed) * radius]}>
            <sphereGeometry args={[0.055, 12, 12]} />
            <meshBasicMaterial color={color} transparent opacity={dim ? 0.1 : 1} />
          </mesh>
        </group>)}
      </group>
    </group>
  </group>;
}
