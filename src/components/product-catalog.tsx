import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Download, Plus, Search, SlidersHorizontal, X, Eye, FlaskConical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { categories, forms, filterProducts, products, type Product } from '@/lib/products';
import { useInquiry } from './inquiry-context';
import vial from '@/assets/vial.jpg';
import ampoule from '@/assets/ampoule.jpg';
import syringe from '@/assets/syringe.jpg';
import portfolio from '@/assets/portfolio.asset.json';

function ProductVisual({ product }: { product: Product }) {
  if (product.form === 'Eye / Ear Drop') return <div className="drop-visual"><Eye size={65} strokeWidth={0.8} /><span>OPHTHALMIC & ENT CARE</span></div>;
  return <img src={product.form === 'Ampoule' ? ampoule : product.form === 'Prefilled Syringe' ? syringe : vial} alt={`${product.form} illustration`} width={816} height={816} loading="lazy" />;
}
export function ProductCatalog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All categories');
  const [form, setForm] = useState('All forms');
  const [visible, setVisible] = useState(12);
  const [detail, setDetail] = useState<Product | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const { selected, toggle } = useInquiry();
  const filtered = filterProducts(query, category, form);
  // Give the opening catalog a clinically diverse selection, without changing SKU data.
  const featuredIds = ['ssi-2-2', 'ssi-3-1', 'ssi-8-4', 'ssi-4-1', 'ssi-1-2', 'ssi-15-1', 'ssi-6-3', 'ssi-5-1'];
  const ordered = query || category !== 'All categories' || form !== 'All forms' ? filtered : [...featuredIds.flatMap(id => products.filter(p => p.id === id)), ...filtered.filter(p => !featuredIds.includes(p.id))];
  function reset() { setCategory('All categories'); setForm('All forms'); setQuery(''); setVisible(12); }
  return <section className="catalog-section site-container" id="portfolio">
    <div className="catalog-heading"><div><span className="eyebrow"><span className="tiny-cross">+</span> THE SSI PHARMA PORTFOLIO</span><h2>Precision in every preparation.</h2></div><Button variant="outline" asChild><a href={portfolio.url} target="_blank" rel="noreferrer"><Download /> Download portfolio</a></Button></div>
    <div className="catalog-layout"><aside className={`catalog-sidebar ${filterOpen ? 'filters-open' : ''}`}><div className="filter-heading"><span>THERAPEUTIC CATEGORY</span><SlidersHorizontal size={15} /></div><div className="category-list"><Button variant="ghost" className={category === 'All categories' ? 'category-selected' : ''} onClick={() => { setCategory('All categories'); setVisible(12); }}>All categories <span>93</span></Button>{categories.map(c => <Button key={c} variant="ghost" className={category === c ? 'category-selected' : ''} onClick={() => { setCategory(c); setVisible(12); }}>{c}<span>{products.filter(p => p.category === c).length}</span></Button>)}</div><div className="sidebar-note"><FlaskConical size={25} /><h3>Have a specific requirement?</h3><p>Our export desk can support dossiers, tenders and distributor inquiries.</p><Button variant="link" asChild><Link to="/inquiry">Let’s discuss <ArrowUpRight /></Link></Button></div></aside>
      <div className="catalog-main"><div className="catalog-controls"><div className="search-box"><Search size={18} /><input aria-label="Search medicines" placeholder="Search by molecule, product or strength…" value={query} maxLength={150} onChange={e => { setQuery(e.target.value); setVisible(12); }} />{query && <Button variant="ghost" size="icon" aria-label="Clear search" onClick={() => setQuery('')}><X /></Button>}</div><label className="form-select"><span className="sr-only">Dosage form</span><select value={form} onChange={e => { setForm(e.target.value); setVisible(12); }}><option>All forms</option>{forms.map(f => <option key={f}>{f}</option>)}</select><ChevronDown size={14} /></label><Button variant="outline" size="icon" className="filter-toggle" aria-label="Toggle category filters" onClick={() => setFilterOpen(!filterOpen)}><SlidersHorizontal /></Button></div>
        <div className="results-meta"><span>Showing <strong>{Math.min(visible, ordered.length)}</strong> of <strong>{ordered.length}</strong> products</span><span>Hospital-grade formulations <span className="status-dot" /></span></div>
        <div className="product-grid">{ordered.slice(0, visible).map(p => <article className="product-card" key={p.id}><div className="product-image"><ProductVisual product={p} /><span className="dosage-tag">{p.form}</span><Button variant="outline" size="icon" className={`add-product ${selected.includes(p.id) ? 'is-selected' : ''}`} aria-label={`${selected.includes(p.id) ? 'Remove' : 'Add'} ${p.name} ${selected.includes(p.id) ? 'from' : 'to'} inquiry`} title={selected.includes(p.id) ? 'Remove from inquiry' : 'Add to inquiry'} onClick={() => toggle(p.id)}>{selected.includes(p.id) ? <Check /> : <Plus />}</Button></div><div className="product-info"><span className="product-category">{p.category}</span><h3>{p.name.split(/\s(?=\d)/)[0]}</h3><p className="product-strength">{p.presentation}</p><Button variant="link" className="product-details" onClick={() => setDetail(p)}>View product <ArrowUpRight /></Button></div></article>)}</div>
        {ordered.length === 0 && <div className="empty-products"><Search size={30} /><h3>No matching medicines</h3><p>Try a different molecule, strength or category.</p><Button variant="outline" onClick={reset}>Clear filters</Button></div>}
        {visible < ordered.length && <div className="load-more"><Button variant="outline" onClick={() => setVisible(v => v + 12)}>Explore more products <ArrowRight /></Button></div>}
        <p className="catalog-disclaimer">Images illustrate dosage forms, not final packaging. Product availability, specifications and registration requirements are confirmed for your destination market.</p>
      </div>
    </div>
    <Dialog open={!!detail} onOpenChange={open => { if (!open) setDetail(null); }}><DialogContent className="product-modal">{detail && <><div className="detail-visual"><ProductVisual product={detail} /></div><span className="eyebrow">{detail.category}</span><DialogTitle className="detail-title">{detail.name}</DialogTitle><DialogDescription>Portfolio reference {detail.id.toUpperCase()} · {detail.form}</DialogDescription><div className="detail-notes"><p><strong>Export documentation</strong> — Dossier and shipment documentation coordinated according to molecule and target-market requirements.</p><p><strong>Commercial supply</strong> — Quantities, pack configuration, availability and lead times confirmed by the export desk.</p><p>For licensed institutional and distributor buyers. Not medical advice or a retail offer. Image is illustrative.</p></div><Button onClick={() => toggle(detail.id)}>{selected.includes(detail.id) ? <Check /> : <Plus />}{selected.includes(detail.id) ? 'Added to inquiry — remove' : 'Add to my inquiry'}</Button><Button variant="outline" asChild><Link to="/inquiry" onClick={() => { if (!selected.includes(detail.id)) toggle(detail.id); setDetail(null); }}>Discuss this product <ArrowUpRight /></Link></Button></>}</DialogContent></Dialog>
    {selected.length > 0 && <div className="selection-tray"><span><Check size={17} /> {selected.length} {selected.length === 1 ? 'medicine' : 'medicines'} in your inquiry</span><Button asChild><Link to="/inquiry">Send requirements <ArrowRight /></Link></Button></div>}
  </section>;
}