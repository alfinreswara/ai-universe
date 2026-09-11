'use client';
import { Canvas } from '@react-three/fiber';
import { useUniverse } from '@/store/universe';import { providers } from '@/data/catalog';import { qualitySettings } from '@/lib/scene-layout';
import Starfield from './Starfield';import Nebula from './Nebula';import ProviderSystem from './ProviderSystem';import CameraController from './CameraController';import QualityManager from './QualityManager';
export default function UniverseScene(){const quality=useUniverse(s=>s.quality);return <Canvas camera={{position:[0,7,55],fov:46,near:.1,far:400}} dpr={[1,qualitySettings[quality].dpr]} gl={{antialias:quality!=='LOW',alpha:false,powerPreference:'high-performance'}} onCreated={({gl})=>{gl.setClearColor('#06080d');}}><ambientLight intensity={.5}/><directionalLight position={[-3,6,8]} intensity={2}/><Starfield/><Nebula/>{providers.filter(p=>p.published).map((p,i)=><ProviderSystem provider={p} key={p.id} index={i}/>)}<CameraController/><QualityManager/></Canvas>;}
