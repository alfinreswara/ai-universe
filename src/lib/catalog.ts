import { providers, families, models, capabilities, sources } from '@/data/catalog';
import { providerSchema,familySchema,modelSchema,sourceSchema, type Selection } from '@/types/catalog';
export type SearchResult = {id:string;name:string;kind:'Provider'|'Family'|'Model'|'Capability';subtitle:string;provider?:string};
export function searchCatalog(query:string):SearchResult[]{
 const q=query.trim().toLowerCase();
 const items:SearchResult[]=[...providers.filter(p=>p.published).map(p=>({id:p.id,name:p.name,kind:'Provider' as const,subtitle:'Provider galaxy'})),...families.map(f=>({id:f.id,name:f.name,kind:'Family' as const,subtitle:providers.find(p=>p.id===f.providerId)!.name,provider:f.providerId})),...models.filter(m=>m.published).map(m=>({id:m.id,name:m.name,kind:'Model' as const,subtitle:providers.find(p=>p.id===m.providerId)!.name,provider:m.providerId})),...capabilities.map(c=>({id:c.name,name:c.name,kind:'Capability' as const,subtitle:`${models.filter(m=>m.capabilities.includes(c.name)).length} models in this collection`}))];
 return items.filter(i=>!q||`${i.name} ${i.subtitle} ${i.kind}`.toLowerCase().includes(q)).sort((a,b)=>Number(b.name.toLowerCase()===q)-Number(a.name.toLowerCase()===q)).slice(0,30);
}
export function parseSelection(params:URLSearchParams):Selection {
 const model=models.find(m=>m.id===params.get('model')&&m.published);
 if(model)return {provider:model.providerId,family:model.familyId,model:model.id};
 const family=families.find(f=>f.id===params.get('family'));
 if(family)return {provider:family.providerId,family:family.id};
 const provider=providers.find(p=>p.id===params.get('provider')&&p.published);
 return provider?{provider:provider.id}:{};
}
export function selectionUrl(s:Selection){const q=new URLSearchParams();for(const [k,v] of Object.entries(s))if(v)q.set(k,v);return '/explore'+(q.size?'?'+q.toString():'');}
export function parentSelection(s:Selection):Selection { if(s.model)return {provider:s.provider,family:s.family};if(s.family)return {provider:s.provider};return {}; }
export function validateCatalog(){
 providers.forEach(p=>providerSchema.parse(p));families.forEach(f=>familySchema.parse(f));models.forEach(m=>modelSchema.parse(m));sources.forEach(s=>sourceSchema.parse(s));
 for(const list of [providers,families,models,sources])if(new Set(list.map(x=>x.id)).size!==list.length)throw Error('Duplicate IDs');
 for(const f of families)if(!providers.some(p=>p.id===f.providerId))throw Error('Orphan family');
 for(const m of models){if(!families.some(f=>f.id===m.familyId&&f.providerId===m.providerId))throw Error('Invalid model hierarchy');if(!sources.some(s=>s.modelId===m.id))throw Error('Missing provenance');}
 return {providers:providers.length,families:families.length,models:models.length,sources:sources.length};
}
export function formatContext(n:number|null){return n===null?'Not officially specified':new Intl.NumberFormat('en-US',{notation:'compact',maximumFractionDigits:2}).format(n)+' tokens';}
