import { Suspense } from 'react';import Explorer from '@/components/Explorer';
export default function Home(){return <Suspense fallback={<main className="page-loading">Initializing Universe…</main>}><Explorer/></Suspense>;}
