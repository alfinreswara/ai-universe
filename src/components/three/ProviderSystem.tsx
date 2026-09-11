'use client';
import { Html } from '@react-three/drei';
import type { Provider } from '@/types/catalog';
import { families,providerModels } from '@/data/catalog';
import { providerPosition,familyPosition } from '@/lib/scene-layout';
import { useUniverse } from '@/store/universe';
import Galaxy from './Galaxy';import ModelNode from './ModelNode';
export default function ProviderSystem({provider,index}:{provider:Provider;index:number}){const selection=useUniverse(s=>s.selection),select=useUniverse(s=>s.select),labels=useUniverse(s=>s.labels);const active=selection.provider===provider.id;const dim=!!selection.provider&&!active;const count=providerModels(provider.id).length;
 return <group><group position={providerPosition(provider.id)}><group scale={.75+count*.18}><Galaxy color={provider.color} seed={index*5} signature={provider.signature} dim={dim}/></group><mesh onClick={e=>{e.stopPropagation();select({provider:provider.id})}}><sphereGeometry args={[1.6,12,12]}/><meshBasicMaterial transparent opacity={0} depthWrite={false}/></mesh>
 {labels&&!dim&&!selection.model&&<Html center position={[0,-1.4,0]} zIndexRange={[10,0]}><button className={`celestial-label ${active?'selected':''}`} onClick={()=>select({provider:provider.id})}><span>{provider.name}</span><small>{count} models <span className="label-arrow">↗</span></small></button></Html>}</group>
 {active&&families.filter(f=>f.providerId===provider.id).map(f=><group key={f.id}><group position={familyPosition(f.id)}><mesh onClick={e=>{e.stopPropagation();select({provider:provider.id,family:f.id})}}><octahedronGeometry args={[.23]}/><meshBasicMaterial color={provider.color} wireframe/></mesh>{!selection.model&&<Html center position={[0,.6,0]} zIndexRange={[9,0]}><button className="family-label" onClick={()=>select({provider:provider.id,family:f.id})}>{f.name} family</button></Html>}</group>{selection.family===f.id&&providerModels(provider.id).filter(m=>m.familyId===f.id).map(m=><ModelNode key={m.id} model={m}/>)}</group>)}
 </group>;
}
