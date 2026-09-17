'use client';

import { Html, useCursor } from '@react-three/drei';
import { useState } from 'react';
import { DoubleSide } from 'three';
import type { AIModel } from '@/types/catalog';
import { getProvider } from '@/data/catalog';
import { modelPosition } from '@/lib/scene-layout';
import { useUniverse } from '@/store/universe';
import CelestialBody from './CelestialBody';

export default function ModelNode({ model }: { model: AIModel }) {
  const [hover, setHover] = useState(false);
  const select = useUniverse(s => s.select);
  const labels = useUniverse(s => s.labels);
  const selected = useUniverse(s => s.selection.model === model.id);
  const provider = getProvider(model.providerId)!;
  useCursor(hover);
  const choose = () => select({ provider: model.providerId, family: model.familyId, model: model.id });
  return <group position={modelPosition(model.id)}>
    <CelestialBody color={provider.color} seed={model.name.length * 1.3} radius={0.43} />
    <mesh onPointerOver={e => { e.stopPropagation(); setHover(true); }} onPointerOut={() => setHover(false)}
      onClick={e => { e.stopPropagation(); setHover(false); choose(); }}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshBasicMaterial transparent opacity={0} depthWrite={false} colorWrite={false} />
    </mesh>
    {(selected || model.capabilities.includes('Reasoning')) && <mesh rotation={[1.05, 0.2, -0.3]}>
      <ringGeometry args={[0.65, 0.8, 96]} />
      <meshBasicMaterial color={provider.color} side={DoubleSide} transparent opacity={selected ? 0.32 : 0.15} depthWrite={false} />
    </mesh>}
    {selected && model.capabilities.slice(0, 4).map((capability, i) => <mesh key={capability} position={[Math.cos(i * 1.6) * 0.95, Math.sin(i * 1.6) * 0.75, 0.1]}>
      <sphereGeometry args={[0.025, 8, 8]} /><meshBasicMaterial color={provider.color} />
    </mesh>)}
    {labels && <Html center position={[0, -0.75, 0]} zIndexRange={[8, 0]}>
      <button className={`celestial-label model-label ${selected ? 'selected' : ''}`} onClick={choose}>
        {model.name}{(hover || selected) && <small>{provider.name} · {model.capabilities[1] ?? 'Text'}</small>}
      </button>
    </Html>}
  </group>;
}
