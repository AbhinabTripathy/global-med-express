import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Globe2, Menu, X, Plus } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { useInquiry } from './inquiry-context';
import portfolio from '@/assets/portfolio.asset.json';

export function SiteShell({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  const { selected } = useInquiry();
  return <>
    <div className="market-bar"><div className="site-container flex items-center justify-between gap-3"><span>From India. For a healthier world.</span><span className="flex items-center gap-2"><Globe2 size={12} /> Middle East & Philippines <span className="market-divider">|</span> <span className="hidden sm:inline">Institutional & distributor supply</span></span></div></div>
    <header className="site-header"><div className="site-container flex h-21 items-center justify-between gap-5">
      <Link to="/" className="brand" aria-label="SSI Pharma home"><span className="brand-mark"><Plus /></span><span>SSI<span className="brand-light"> PHARMA</span><small>A DIVISION OF SSI EXPORT</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation"><Link to="/" activeOptions={{ exact: true }} activeProps={{ className: 'nav-active' }}>Home</Link><Link to="/products" activeProps={{ className: 'nav-active' }}>Products</Link><Link to="/about" activeProps={{ className: 'nav-active' }}>About SSI</Link><Link to="/quality" activeProps={{ className: 'nav-active' }}>Quality & export</Link></nav>
      <div className="flex items-center gap-2"><Button asChild className="inquiry-nav"><Link to="/inquiry">Make an inquiry{selected.length > 0 && <span className="selection-count">{selected.length}</span>}<ArrowUpRight /></Link></Button><Button variant="ghost" size="icon" className="lg:hidden" aria-label={menu ? 'Close navigation' : 'Open navigation'} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</Button></div>
    </div>{menu && <nav className="mobile-nav" aria-label="Mobile navigation" onClick={() => setMenu(false)}><Link to="/">Home</Link><Link to="/products">Products</Link><Link to="/about">About SSI</Link><Link to="/quality">Quality & export</Link><Link to="/inquiry">Make an inquiry</Link></nav>}</header>
    <main>{children}</main>
    <footer className="site-footer"><div className="site-container"><div className="footer-top"><div><Link to="/" className="brand"><span className="brand-mark"><Plus /></span><span>SSI PHARMA</span></Link><p>A focused portfolio. A single, accountable<br />partner for international healthcare.</p></div><div><span className="eyebrow">OUR EXPORT DESK</span><a href="mailto:info@ssiexport.com">info@ssiexport.com <ArrowUpRight size={16} /></a><a href="tel:+918866194011">+91 8866194011</a></div><div><span className="eyebrow">EXPLORE</span><Link to="/quality">Quality & export</Link><a href={portfolio.url} target="_blank" rel="noreferrer">Download portfolio <ArrowUpRight size={16} /></a><Link to="/inquiry">Distributor inquiries</Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SSI Pharma · Vadodara, India</span><span>For licensed healthcare and pharmaceutical buyers. Not for retail sale.</span></div></div></footer>
  </>;
}