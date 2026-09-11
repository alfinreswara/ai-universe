'use client';
import { useMemo,useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { AdditiveBlending,Color,Points } from 'three';
import { qualitySettings,seededRandom } from '@/lib/scene-layout';
import { useUniverse } from '@/store/universe';
export default function Galaxy({color,seed,signature,dim=false}:{color:string;seed:number;signature:string;dim?:boolean}){
 const quality=useUniverse(s=>s.quality),reduced=useUniverse(s=>s.reducedMotion);const ref=useRef<Points>(null);
 const positions=useMemo(()=>{const r=seededRandom(seed+42);const count=qualitySettings[quality].dust;const a=new Float32Array(count*3);for(let i=0;i<count;i++){const radius=Math.pow(r(),.7)*4.4;const angle=(i%3)*Math.PI*2/3+radius*.9+(r()-.5)*.9;const thickness=(r()-.5)*(.7-radius*.12);a.set([Math.cos(angle)*radius,thickness,Math.sin(angle)*radius],i*3);}return a;},[quality,seed]);
 useFrame((_,d)=>{if(ref.current&&!reduced)ref.current.rotation.y+=d*.018;});
 return <group rotation={[.62+seed*.06,.1,seed*.18]}>
  <points ref={ref}><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions,3]}/></bufferGeometry><pointsMaterial color={color} size={.085} sizeAttenuation transparent opacity={dim?.04:.75} depthWrite={false} blending={AdditiveBlending}/></points>
  {[1.7,2.9,4.1].map((r,i)=><mesh key={r} rotation={[Math.PI/2+(signature==='ring'?i*.11:0),0,0]}><ringGeometry args={[r,r+.014,100]}/><meshBasicMaterial color={color} transparent opacity={dim?.015:.19} side={2} depthWrite={false}/></mesh>)}
  <mesh><sphereGeometry args={[.62,24,24]}/><meshBasicMaterial color={color} transparent opacity={dim?.1:1}/></mesh>
  <mesh rotation={[-.8,0,0]}><sphereGeometry args={[.68,24,24]}/><meshBasicMaterial color="#ffffff" wireframe transparent opacity={dim?.03:.12}/></mesh>
  <sprite scale={[3.1,3.1,3.1]}><shaderMaterial transparent depthWrite={false} blending={AdditiveBlending} uniforms={{tint:{value:new Color(color)},opacity:{value:dim?.04:.65}}} vertexShader="varying vec2 vUv;void main(){vUv=uv;vec4 mv=modelViewMatrix*vec4(0.,0.,0.,1.);mv.xy+=position.xy*3.1;gl_Position=projectionMatrix*mv;}" fragmentShader="varying vec2 vUv;uniform vec3 tint;uniform float opacity;void main(){float r=length(vUv-.5)*2.;float glow=pow(max(0.,1.-r),3.);gl_FragColor=vec4(tint,glow*opacity);}"/></sprite>
 </group>;
}
