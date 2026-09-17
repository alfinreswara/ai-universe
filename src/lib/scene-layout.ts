import { providers, families, models } from '@/data/catalog';
import type { Vec3,Selection,Quality } from '@/types/catalog';
export function seededRandom(seed:number){return ()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};}
// Curated provider composition only. New providers receive deterministic outer positions.
const anchors:Vec3[]=[[3.2,0,5],[14.2,6.6,-4],[-7.5,5.8,-2],[14,-5,0],[-8,-4,1],[-1,-8,-4],[2.5,11,-15],[22,1,-15],[-17,10,-14]];
// Visual scale is compositional, not a ranking of model capability.
export const providerScale=(id:string):number=>id==='openai'?2.15:id==='anthropic'?1.1:id==='google'?1.15:.78;
export const providerPosition=(id:string):Vec3=>{const i=providers.findIndex(p=>p.id===id);return anchors[i]??[Math.cos(i*2.4)*26,Math.sin(i*2.4)*17,-i*2];};
export function familyPosition(id:string):Vec3 {const f=families.find(f=>f.id===id)!;const p=providerPosition(f.providerId);const siblings=families.filter(x=>x.providerId===f.providerId);const i=siblings.indexOf(f);const a=i*2.4;const orbit=providerScale(f.providerId)*3.5;return [p[0]+Math.cos(a)*orbit,p[1]+Math.sin(a)*orbit*.7,p[2]+.5];}
export function modelPosition(id:string):Vec3 {const m=models.find(m=>m.id===id)!;const p=familyPosition(m.familyId);const siblings=models.filter(x=>x.familyId===m.familyId);const a=siblings.indexOf(m)/siblings.length*Math.PI*2+.6;return [p[0]+Math.cos(a)*2.5,p[1]+Math.sin(a)*1.6,p[2]+Math.sin(a)*1.2];}
export function cameraTarget(s:Selection):{target:Vec3;radius:number}{if(s.model)return {target:modelPosition(s.model),radius:2.8};if(s.family)return {target:familyPosition(s.family),radius:5};if(s.provider)return {target:providerPosition(s.provider),radius:9};return {target:[0,0,0],radius:24};}
export function chooseQuality(width:number,memory=8,dpr=1):Quality{return width<640||memory<=4?'LOW':width<1100||dpr>2?'MEDIUM':'HIGH';}
export const qualitySettings={LOW:{stars:1200,dust:900,dpr:1},MEDIUM:{stars:3000,dust:2200,dpr:1.4},HIGH:{stars:6000,dust:4000,dpr:1.75}};
