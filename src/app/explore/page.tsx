import { absoluteSiteUrl } from '@/lib/site';
import { Suspense } from 'react';import Explorer from '@/components/Explorer';
export const metadata={title:'Explore',alternates:{canonical:absoluteSiteUrl('/explore/')}};
export default function ExplorePage(){return <Suspense fallback={<main className="page-loading">Initializing Universe…</main>}><Explorer/></Suspense>;}
