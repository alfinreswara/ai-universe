'use client';

import { Html, Line, useCursor } from '@react-three/drei';
import { useState, type CSSProperties } from 'react';
import type { Provider } from '@/types/catalog';
import { families, providerModels } from '@/data/catalog';
import { providerPosition, familyPosition, modelPosition, providerScale } from '@/lib/scene-layout';
import { useUniverse } from '@/store/universe';
import Galaxy from './Galaxy';
import ModelNode from './ModelNode';

export default function ProviderSystem({ provider, index }: { provider: Provider; index: number }) {
  const selection = useUniverse(s => s.selection);
  const select = useUniverse(s => s.select);
  const labels = useUniverse(s => s.labels);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const active = selection.provider === provider.id;
  const dim = !!selection.provider && !active;
  const count = providerModels(provider.id).length;
  const scale = providerScale(provider.id);
  const hero = index === 0;
  const color = hero ? '#80dfd2' : provider.color;

  return <group>
    <group position={providerPosition(provider.id)}>
      <group scale={scale}>
        <Galaxy color={color} seed={index * 5} signature={provider.signature} dim={dim} active={active || hovered} hero={hero} />
      </group>
      {!dim && <mesh onPointerOver={e => { e.stopPropagation(); setHovered(true); }} onPointerOut={() => setHovered(false)}
        onClick={e => { e.stopPropagation(); setHovered(false); select({ provider: provider.id }); }}>
        <sphereGeometry args={[1.65 * scale, 16, 16]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} colorWrite={false} />
      </mesh>}
      {labels && !dim && !selection.family && <Html center position={[0, -1.5 * scale - 0.8, 0]} zIndexRange={[10, 0]}>
        <button className={`celestial-label ${hero ? 'hero-label' : ''} ${active ? 'selected' : ''}`}
          style={{ '--planet-color': color } as CSSProperties} onClick={() => select({ provider: provider.id })}>
          <span className="celestial-label-name"><i />{provider.name}<span className="label-arrow">↗</span></span>
          <small>{count.toString().padStart(2, '0')} MODELS <span> / </span> {hero ? 'FEATURED SYSTEM' : 'EXPLORE SYSTEM'}</small>
        </button>
      </Html>}
    </group>
    {active && families.filter(f => f.providerId === provider.id).map(f => <group key={f.id}>
      <Line points={[providerPosition(provider.id), familyPosition(f.id)]} color={color} transparent opacity={0.18} dashed dashSize={0.12} gapSize={0.16} lineWidth={1} />
      <group position={familyPosition(f.id)}>
        <mesh onClick={e => { e.stopPropagation(); select({ provider: provider.id, family: f.id }); }}>
          <icosahedronGeometry args={[0.26, 1]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.45} metalness={0.6} roughness={0.3} />
        </mesh>
        {labels && !selection.model && <Html center position={[0, 0.65, 0]} zIndexRange={[9, 0]}>
          <button className="family-label" onClick={() => select({ provider: provider.id, family: f.id })}>{f.name} family ↗</button>
        </Html>}
      </group>
      {selection.family === f.id && providerModels(provider.id).filter(m => m.familyId === f.id).map(m => <group key={m.id}>
        <Line points={[familyPosition(f.id), modelPosition(m.id)]} color={color} transparent opacity={0.12} dashed dashSize={0.08} gapSize={0.12} lineWidth={1} />
        <ModelNode model={m} />
      </group>)}
    </group>)}
  </group>;
}
