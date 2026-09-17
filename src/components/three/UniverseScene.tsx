'use client';

import { Canvas } from '@react-three/fiber';
import { ACESFilmicToneMapping } from 'three';
import { useUniverse } from '@/store/universe';
import { providers } from '@/data/catalog';
import { qualitySettings } from '@/lib/scene-layout';
import Starfield from './Starfield';
import Nebula from './Nebula';
import ProviderSystem from './ProviderSystem';
import CameraController from './CameraController';
import QualityManager from './QualityManager';
import OrbitalField from './OrbitalField';

export default function UniverseScene() {
  const quality = useUniverse(s => s.quality);
  return <Canvas camera={{ position: [0, 6, 42], fov: 44, near: 0.1, far: 400 }} dpr={[1, qualitySettings[quality].dpr]}
    gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
    onCreated={({ gl }) => { gl.setClearColor('#050810'); gl.toneMapping = ACESFilmicToneMapping; gl.toneMappingExposure = 1.15; }}>
    <ambientLight intensity={0.25} />
    <directionalLight position={[-8, 12, 10]} intensity={2.5} color="#b6d7ff" />
    <Nebula />
    <Starfield />
    <OrbitalField />
    {providers.filter(p => p.published).map((provider, index) => <ProviderSystem provider={provider} key={provider.id} index={index} />)}
    <CameraController />
    <QualityManager />
  </Canvas>;
}
