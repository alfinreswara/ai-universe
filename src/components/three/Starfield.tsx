'use client';
import { useMemo,useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { AdditiveBlending, ShaderMaterial } from 'three';
import { seededRandom,qualitySettings } from '@/lib/scene-layout';
import { useUniverse } from '@/store/universe';
export default function Starfield(){
 const quality=useUniverse(s=>s.quality);const reduced=useUniverse(s=>s.reducedMotion);const ref=useRef<ShaderMaterial>(null);
 const {positions,sizes}=useMemo(()=>{const count=qualitySettings[quality].stars,r=seededRandom(234);const positions=new Float32Array(count*3),sizes=new Float32Array(count);for(let i=0;i<count;i++){const layer=i%3;positions.set([(r()-.5)*(layer===0?230:130),(r()-.5)*(layer===0?150:100),-70+r()*140],i*3);sizes[i]=.4+r()*1.4;}return{positions,sizes};},[quality]);
 useFrame((_,delta)=>{if(ref.current&&!reduced)ref.current.uniforms.time.value+=delta;});
 return <points frustumCulled={false}><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions,3]}/><bufferAttribute attach="attributes-size" args={[sizes,1]}/></bufferGeometry><shaderMaterial ref={ref} transparent depthWrite={false} blending={AdditiveBlending} uniforms={{time:{value:0}}} vertexShader={`attribute float size; varying float v; uniform float time; void main(){vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(size*100./max(8.,-mv.z),.65,3.);v=.35+size*.24+sin(time*.35+position.x)*.05;}`} fragmentShader={`varying float v;void main(){float d=length(gl_PointCoord-.5);float a=1.-smoothstep(.1,.5,d);gl_FragColor=vec4(vec3(.76,.83,1.),a*v);}`}/></points>;
}
