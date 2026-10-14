import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, ArrowDown, ShieldCheck, FileCheck2, Globe2, PackageCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCatalog } from '@/components/product-catalog';
import { pageHead } from '@/lib/metadata';
import editorial from '@/assets/injectables-editorial.jpg';

export const Route = createFileRoute('/')({ head: () => pageHead('Hospital Injectables & Product Portfolio', 'Explore SSI Pharma’s 93 injectable and ophthalmic SKUs across 17 therapeutic categories. Export inquiries for the Middle East and Philippines.'), component: Index });
function Index() {
  return <><section className="portfolio-hero"><img className="hero-photo" src={editorial} alt="Sterile injectable vials, ampoule and prefilled syringe — illustrative dosage forms" width={1536} height={1024} fetchPriority="high" /><div className="hero-content site-container"><span className="eyebrow"><span className="status-dot" /> YOUR GLOBAL INJECTABLES PARTNER</span><h1>SSI Pharma.<br />Care without <em>borders.</em></h1><p>Hospital injectables. Ophthalmic care.<br />A focused portfolio, connecting quality manufacturing<br className="hidden sm:block" /> in India with healthcare across the world.</p><div className="hero-actions"><Button className="hero-primary" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>Explore our products <ArrowDown /></Button><Button variant="link" asChild><Link to="/inquiry">Partner with us <ArrowUpRight /></Link></Button></div><div className="hero-stats"><div><strong>93<span>+</span></strong><span>PRODUCT SKUs</span></div><div><strong>17</strong><span>THERAPEUTIC CATEGORIES</span></div><div><strong>01</strong><span>ACCOUNTABLE PARTNER</span></div></div></div><span className="hero-image-caption">STERILE PRECISION. GLOBAL REACH.</span></section>
    <div className="trust-band"><div className="site-container"><span><ShieldCheck /> Quality-first sourcing</span><span><FileCheck2 /> Regulatory documentation support</span><span><Globe2 /> Cross-border export expertise</span><span><PackageCheck /> Flexible supply & packaging</span></div></div>
    <ProductCatalog />
    <section className="export-cta"><div className="site-container"><div><span className="eyebrow">A PARTNERSHIP BEYOND THE PRODUCT</span><h2>Your market. Our commitment.</h2><p>From dossier requests to your next hospital tender,<br />let’s build the right supply partnership.</p></div><Button asChild><Link to="/inquiry">Talk to our export desk <ArrowUpRight /></Link></Button></div></section>
  </>;
}
