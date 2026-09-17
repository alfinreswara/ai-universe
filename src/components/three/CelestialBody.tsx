'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { AdditiveBlending, Color, MathUtils, Mesh, ShaderMaterial } from 'three';
import { useUniverse } from '@/store/universe';

// Surface noise rotates with the planet while illumination stays in world space.
const vertex = `
  varying vec3 vLocal;
  varying vec3 vNormal;
  varying vec3 vWorld;
  void main() {
    vLocal = position;
    vNormal = normalize(mat3(modelMatrix) * normal);
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

export const noiseGLSL = `
  float hash(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.11, 0.27, 0.43));
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }
  float noise(vec3 p) {
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash(i), hash(i+vec3(1,0,0)), f.x),
                   mix(hash(i+vec3(0,1,0)), hash(i+vec3(1,1,0)), f.x), f.y),
               mix(mix(hash(i+vec3(0,0,1)), hash(i+vec3(1,0,1)), f.x),
                   mix(hash(i+vec3(0,1,1)), hash(i+vec3(1,1,1)), f.x), f.y), f.z);
  }
  float fbm(vec3 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + 7.1; a *= 0.5; }
    return v;
  }
`;

const surface = `
  uniform vec3 tint;
  uniform float seed;
  uniform float gas;
  uniform float brightness;
  varying vec3 vLocal;
  varying vec3 vNormal;
  varying vec3 vWorld;
  ${noiseGLSL}
  void main() {
    vec3 p = normalize(vLocal);
    vec3 n = normalize(vNormal);
    vec3 viewDir = normalize(cameraPosition - vWorld);
    vec3 lightDir = normalize(vec3(-0.65, 0.85, 1.0));
    if (brightness < 0.2) {
      float shade = 0.04 + max(dot(n, lightDir), 0.0) * 0.25;
      gl_FragColor = vec4(tint * shade * brightness, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      return;
    }
    float terrain = fbm(p * 4.3 + seed);
    float detail = fbm(p * 28.0 + terrain * 3.0);
    float ridges = smoothstep(0.39, 0.64, terrain + detail * 0.16);
    vec3 ocean = tint * vec3(0.09, 0.18, 0.23);
    vec3 land = mix(tint * 0.3, vec3(0.53, 0.59, 0.62), detail * 0.58);
    vec3 rock = mix(ocean, land, ridges);
    float clouds = smoothstep(0.5, 0.74, fbm(p * 6.0 + terrain * 2.2 + seed + 20.0));
    rock = mix(rock, vec3(0.8, 0.88, 0.9), clouds * 0.7);
    float bands = sin(p.y * 36.0 + fbm(p * 5.0 + seed) * 12.0) * 0.5 + 0.5;
    vec3 gaseous = mix(tint * 0.23, tint * 0.95 + 0.08, bands * 0.58 + terrain * 0.42);
    vec3 albedo = mix(rock, gaseous, gas);
    float diffuse = max(dot(n, lightDir), 0.0);
    float terminator = smoothstep(-0.18, 0.28, dot(n, lightDir));
    float rim = pow(1.0 - max(dot(n, viewDir), 0.0), 3.4);
    float specular = pow(max(dot(n, normalize(lightDir + viewDir)), 0.0), 42.0) * (1.0 - ridges) * 0.2;
    float cities = pow(max(noise(p * 165.0 + seed) - 0.7, 0.0) * 3.3, 3.0) * ridges;
    vec3 color = albedo * (0.075 + diffuse * 1.55) * (0.32 + terminator * 0.68);
    color += tint * rim * (0.3 + diffuse * 0.65);
    color += tint * cities * (1.0 - terminator) * (1.0 - gas) * 0.7;
    color += vec3(0.7, 0.88, 1.0) * specular;
    gl_FragColor = vec4(color * brightness, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

const atmosphere = `
  uniform vec3 tint;
  uniform float brightness;
  varying vec3 vNormal;
  varying vec3 vWorld;
  void main() {
    vec3 n = normalize(vNormal);
    vec3 viewDir = normalize(cameraPosition - vWorld);
    float rim = pow(1.0 - max(dot(n, viewDir), 0.0), 4.0);
    float light = 0.35 + max(dot(n, normalize(vec3(-0.65, 0.85, 1.0))), 0.0) * 0.65;
    gl_FragColor = vec4(tint, rim * light * brightness * 0.7);
  }
`;

export default function CelestialBody({ color, seed, gas = false, dim = false, radius = 1.5 }: {
  color: string; seed: number; gas?: boolean; dim?: boolean; radius?: number;
}) {
  const reduced = useUniverse(s => s.reducedMotion);
  const quality = useUniverse(s => s.quality);
  const body = useRef<Mesh>(null);
  const material = useRef<ShaderMaterial>(null);
  const halo = useRef<ShaderMaterial>(null);
  const uniforms = useMemo(() => ({
    tint: { value: new Color(color) }, seed: { value: seed }, gas: { value: gas ? 1 : 0 }, brightness: { value: 1 },
  }), [color, seed, gas]);
  const atmosphereUniforms = useMemo(() => ({ tint: { value: new Color(color) }, brightness: { value: 1 } }), [color]);
  useFrame((_, delta) => {
    if (body.current && !reduced) body.current.rotation.y += delta * 0.035;
    for (const ref of [material, halo]) if (ref.current) {
      ref.current.uniforms.brightness.value = MathUtils.damp(ref.current.uniforms.brightness.value, dim ? 0.15 : 1, 4, delta);
    }
  });
  const segments = quality === 'LOW' ? 40 : 72;
  const surfaceShader = quality === 'LOW' ? surface.replace('i < 5', 'i < 3') : surface;
  return <group>
    <mesh ref={body} rotation={[0.15, seed, 0.12]}>
      <sphereGeometry args={[radius, segments, segments]} />
      <shaderMaterial ref={material} uniforms={uniforms} vertexShader={vertex} fragmentShader={surfaceShader} />
    </mesh>
    <mesh scale={1.045}>
      <sphereGeometry args={[radius, segments, segments]} />
      <shaderMaterial ref={halo} uniforms={atmosphereUniforms} vertexShader={vertex} fragmentShader={atmosphere} transparent depthWrite={false} blending={AdditiveBlending} />
    </mesh>
  </group>;
}
