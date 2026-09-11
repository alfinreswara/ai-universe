import { providers, families, models } from '@/data/catalog';
import type { Vec3,Selection,Quality } from '@/types/catalog';
export function seededRandom(seed:number){return ()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};}
// Curated provider composition only. New providers receive deterministic outer positions.
const anchors:Vec3[]=[[-3,0,2],[10,5,-6],[-11,6,-5],[13,-5,0],[-15,-5,1],[3,-9,-9],[-4,11,-14],[20,8,-18],[-21,10,-16]];
export const providerPosition=(id:string):Vec3=>{const i=providers.findIndex(p=>p.id===id);return anchors[i]??[Math.cos(i*2.4)*26,Math.sin(i*2.4)*17,-i*2];};
export function familyPosition(id:string):Vec3 {const f=families.find(f=>f.id===id)!;const p=providerPosition(f.providerId);const siblings=families.filter(x=>x.providerId===f.providerId);const i=siblings.indexOf(f);const a=i*2.4;return [p[0]+Math.cos(a)*3.7,p[1]+Math.sin(a)*2.6,p[2]+.5];}
export function modelPosition(id:string):Vec3 {const m=models.find(m=>m.id===id)!;const p=familyPosition(m.familyId);const siblings=models.filter(x=>x.familyId===m.familyId);const a=siblings.indexOf(m)/siblings.length*Math.PI*2+.6;return [p[0]+Math.cos(a)*2.5,p[1]+Math.sin(a)*1.6,p[2]+Math.sin(a)*1.2];}
export function cameraTarget(s:Selection):{target:Vec3;radius:number}{if(s.model)return {target:modelPosition(s.model),radius:2.6};if(s.family)return {target:familyPosition(s.family),radius:5};if(s.provider)return {target:providerPosition(s.provider),radius:9};return {target:[0,0,0],radius:29};}
export function chooseQuality(width:number,memory=8,dpr=1):Quality{return width<640||memory<=4?'LOW':width<1100||dpr>2?'MEDIUM':'HIGH';}
export const qualitySettings={LOW:{stars:1200,dust:900,dpr:1},MEDIUM:{stars:3000,dust:2200,dpr:1.4},HIGH:{stars:6000,dust:4000,dpr:1.75}};
