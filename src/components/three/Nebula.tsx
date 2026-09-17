'use client';

import { useEffect, useMemo } from 'react';
import { useThree } from '@react-three/fiber';
import { useFBO } from '@react-three/drei';
import { BackSide, Color, Mesh, OrthographicCamera, PlaneGeometry, Scene, ShaderMaterial, UnsignedByteType } from 'three';
import { useUniverse } from '@/store/universe';
import { noiseGLSL } from './CelestialBody';

const vertex = `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;
const fragment = `
  varying vec2 vUv;
  uniform vec3 cool;
  uniform vec3 warm;
  ${noiseGLSL}
  void main() {
    float theta = vUv.x * 6.283185;
    float phi = vUv.y * 3.141593;
    vec3 p = vec3(sin(theta) * sin(phi), cos(phi), cos(theta) * sin(phi));
    float n = fbm(p * 3.6 + 12.0);
    float clouds = fbm(p * 7.5 + n * 3.2);
    float band = exp(-pow((p.y + p.x * 0.33 + 0.08) * 3.3, 2.0));
    float veil = smoothstep(0.25, 0.8, clouds) * band;
    float filaments = pow(fbm(p * 16.0 + n * 5.0), 3.0) * band;
    vec3 nebula = mix(cool, warm, smoothstep(-0.5, 0.65, p.x + n * 0.5));
    vec3 color = vec3(0.009, 0.014, 0.025) + nebula * (veil * 0.7 + filaments * 0.9);
    color += (hash(vec3(vUv * 900.0, 1.0)) - 0.5) / 255.0;
    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function Nebula() {
  const quality = useUniverse(s => s.quality);
  const gl = useThree(s => s.gl);
  const resolution = quality === 'LOW' ? 768 : 1536;
  const target = useFBO(resolution, resolution / 2, { depthBuffer: false, stencilBuffer: false, type: UnsignedByteType });
  const uniforms = useMemo(() => ({ skyMap: { value: target.texture } }), [target]);

  useEffect(() => {
    // Bake this static sky once per quality change, avoiding full-screen noise every frame.
    const scene = new Scene();
    const geometry = new PlaneGeometry(2, 2);
    const material = new ShaderMaterial({ vertexShader: vertex, fragmentShader: fragment, uniforms: {
      cool: { value: new Color('#344e7b') }, warm: { value: new Color('#775788') },
    } });
    scene.add(new Mesh(geometry, material));
    const previous = gl.getRenderTarget();
    try {
      gl.setRenderTarget(target);
      gl.render(scene, new OrthographicCamera(-1, 1, 1, -1, 0, 1));
    } finally {
      gl.setRenderTarget(previous);
      geometry.dispose();
      material.dispose();
    }
  }, [gl, target, resolution]);

  return <mesh renderOrder={-10} rotation={[0, -0.6, 0]}>
    <sphereGeometry args={[170, 32, 24]} />
    <shaderMaterial uniforms={uniforms} side={BackSide} depthWrite={false} vertexShader={vertex}
      fragmentShader="varying vec2 vUv; uniform sampler2D skyMap; void main() { gl_FragColor = texture2D(skyMap, vUv); }" />
  </mesh>;
}
