import type { Metadata } from 'next';import Header from '@/components/ui/Header';import './globals.css';
const origin=process.env.NEXT_PUBLIC_SITE_URL||'https://ai-universe-observatory.tarjosenuk.chatgpt.site';
export const metadata:Metadata={metadataBase:new URL(origin),title:{default:'AI Universe — An Atlas of Artificial Intelligence',template:'%s | AI Universe'},description:'Explore AI providers, model families, and capabilities in an interactive 3D universe. A curated collection with official sources.',openGraph:{type:'website',siteName:'AI Universe',title:'AI Universe',description:'Explore the intelligence shaping our world.'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}</body></html>;}
