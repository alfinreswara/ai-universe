'use client';

import { DoubleSide } from 'three';
import { useUniverse } from '@/store/universe';

export default function OrbitalField() {
  const focused = useUniverse(s => !!s.selection.provider);
  return <group position={[3, -0.4, -3]} rotation={[0.58, 0.06, -0.24]}>
    {[12.5, 18, 24, 32].map((radius, i) => <mesh key={radius} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius, radius + 0.013, 220]} />
      <meshBasicMaterial color={i % 2 ? '#5c789e' : '#7b8b9e'} side={DoubleSide} transparent opacity={focused ? 0.025 : 0.12} depthWrite={false} />
    </mesh>)}
  </group>;
}
