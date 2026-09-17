import { absoluteSiteUrl } from '@/lib/site';
import type { MetadataRoute } from 'next';import { models,providers } from '@/data/catalog';import { articles } from '@/data/learn';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return ['','/explore','/models','/providers','/learn',...models.filter(m=>m.published).map(m=>`/models/${m.providerId}/${m.slug}`),...providers.filter(p=>p.published).map(p=>`/providers/${p.slug}`),...articles.map(a=>`/learn/${a.slug}`)].map(path=>({url:absoluteSiteUrl(path+'/')}));}
