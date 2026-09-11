'use client';
import { Html } from '@react-three/drei';
import { useState } from 'react';
import type { AIModel } from '@/types/catalog';
import { getProvider } from '@/data/catalog';
import { modelPosition } from '@/lib/scene-layout';
import { useUniverse } from '@/store/universe';
export default function ModelNode({model}:{model:AIModel}){const [hover,setHover]=useState(false);const select=useUniverse(s=>s.select),selected=useUniverse(s=>s.selection.model===model.id);const p=getProvider(model.providerId)!;
 return <group position={modelPosition(model.id)}><mesh onPointerOver={e=>{e.stopPropagation();setHover(true)}} onPointerOut={()=>setHover(false)} onClick={e=>{e.stopPropagation();select({provider:model.providerId,family:model.familyId,model:model.id})}}><sphereGeometry args={[selected?.38:.28,32,24]}/><meshStandardMaterial color={p.color} roughness={.55} metalness={.5} emissive={p.color} emissiveIntensity={hover||selected?.8:.2}/></mesh>
 {model.capabilities.includes('Reasoning')&&<mesh rotation={[.9,.2,0]}><ringGeometry args={[.45,.48,64]}/><meshBasicMaterial color={p.color} side={2} transparent opacity={.5}/></mesh>}
 {selected&&model.capabilities.slice(0,4).map((c,i)=><mesh key={c} position={[Math.cos(i*1.6)*.75,Math.sin(i*1.6)*.75,.1]}><sphereGeometry args={[.035,8,8]}/><meshBasicMaterial color={p.color}/></mesh>)}
 <Html center position={[0,-.55,0]} zIndexRange={[8,0]}><button className={`celestial-label model-label ${selected?'selected':''}`} onClick={()=>select({provider:model.providerId,family:model.familyId,model:model.id})}>{model.name}{hover&&<small>{p.name} · {model.capabilities[1]??'Text'}</small>}</button></Html></group>;
}
