'use client';
import Link from 'next/link';export default function ErrorPage({reset}:{reset:()=>void}){return <main className="not-found" id="main"><h1>A connection was interrupted.</h1><p>Your place in the universe is still here.</p><button className="primary-button" onClick={reset}>Try again</button><Link href="/models">Browse models</Link></main>;}
