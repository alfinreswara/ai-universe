import { PrismaClient } from '@prisma/client';
import { providers,families,models,capabilities,sources,modelCapabilities } from '../src/data/catalog';
import { validateCatalog } from '../src/lib/catalog';
const db=new PrismaClient();
async function main(){validateCatalog();await db.$transaction(async tx=>{for(const p of providers)await tx.provider.upsert({where:{id:p.id},create:p,update:p});for(const f of families)await tx.modelFamily.upsert({where:{id:f.id},create:f,update:f});for(const m of models){const {capabilities:ignored,...data}=m;void ignored;await tx.model.upsert({where:{id:m.id},create:data,update:data});}for(const c of capabilities)await tx.capability.upsert({where:{id:c.id},create:c,update:c});for(const s of sources)await tx.source.upsert({where:{id:s.id},create:s,update:s});for(const m of models)await tx.modelCapability.deleteMany({where:{modelId:m.id}});for(const mc of modelCapabilities)await tx.modelCapability.create({data:mc});},{timeout:30000});console.log('Verified catalog seeded.');}
main().catch(e=>{console.error(e);process.exitCode=1}).finally(()=>db.$disconnect());
