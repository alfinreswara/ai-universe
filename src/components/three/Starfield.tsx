'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { AdditiveBlending, Color, ShaderMaterial } from 'three';
import { seededRandom, qualitySettings } from '@/lib/scene-layout';
import { useUniverse } from '@/store/universe';

export default function Starfield() {
  const quality = useUniverse(s => s.quality);
  const reduced = useUniverse(s => s.reducedMotion);
  const ref = useRef<ShaderMaterial>(null);
  const uniforms = useMemo(() => ({ time: { value: 0 } }), []);
  const { positions, sizes, colors } = useMemo(() => {
    const count = qualitySettings[quality].stars, random = seededRandom(234);
    const positions = new Float32Array(count * 3), sizes = new Float32Array(count), colors = new Float32Array(count * 3);
    const palette = ['#bfdcff', '#ffffff', '#f5d7ae', '#99b9ef'];
    for (let i = 0; i < count; i++) {
      const theta = random() * Math.PI * 2;
      const z = random() * 2 - 1;
      const radius = 90 + random() * 65;
      const planar = Math.sqrt(1 - z * z);
      positions.set([Math.cos(theta) * planar * radius, z * radius, Math.sin(theta) * planar * radius], i * 3);
      sizes[i] = i % 37 === 0 ? 3.5 + random() * 2 : 0.6 + random() * 1.5;
      const tint = new Color(palette[i % palette.length]);
      colors.set([tint.r, tint.g, tint.b], i * 3);
    }
    return { positions, sizes, colors };
  }, [quality]);
  useFrame((_, delta) => { if (ref.current && !reduced) ref.current.uniforms.time.value += delta; });
  return <points frustumCulled={false}>
    <bufferGeometry>
      <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      <bufferAttribute attach="attributes-color" args={[colors, 3]} />
    </bufferGeometry>
    <shaderMaterial ref={ref} transparent depthWrite={false} blending={AdditiveBlending} uniforms={uniforms} vertexShader={`
      attribute float size;
      attribute vec3 color;
      varying vec3 vColor;
      varying float vBrightness;
      uniform float time;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(size * 210.0 / max(12.0, -mv.z), 0.8, 11.0);
        vBrightness = 0.6 + sin(time * 0.45 + position.x) * 0.12;
        vColor = color;
      }
    `} fragmentShader={`
      varying vec3 vColor;
      varying float vBrightness;
      void main() {
        vec2 p = gl_PointCoord - 0.5;
        float d = length(p);
        float core = exp(-d * d * 44.0);
        float glow = exp(-d * 8.0) * 0.28;
        float rays = exp(-abs(p.x) * 65.0) * exp(-abs(p.y) * 9.0) + exp(-abs(p.y) * 65.0) * exp(-abs(p.x) * 9.0);
        gl_FragColor = vec4(vColor, (core + glow + rays * 0.13) * vBrightness);
      }
    `} />
  </points>;
}
