import { describe, expect, it } from 'vitest';
import { products, categories, filterProducts } from '@/lib/products';
import { inquirySchema } from '@/lib/inquiry-schema';
describe('SSI Pharma supplied portfolio', () => {
  it('contains all 93 distinct SKUs', () => { expect(products).toHaveLength(93); expect(new Set(products.map(p => p.id)).size).toBe(93); });
  it('covers all 17 therapeutic categories', () => { expect(categories).toHaveLength(17); });
  it('retains the three supplied Artesunate strengths', () => { expect(filterProducts('Artesunate', 'All categories', 'All forms').map(p => p.name)).toEqual(['Artesunate for Injection 30 mg', 'Artesunate for Injection 60 mg', 'Artesunate for Injection 120 mg']); });
  it('distinguishes all four Enoxaparin strengths', () => { expect(filterProducts('Enoxaparin', 'Anticoagulants', 'All forms').map(p => p.presentation)).toEqual(['20 mg/0.2 ml', '40 mg/0.4 ml', '60 mg/0.6 ml', '80 mg/0.8 ml']); });
});
describe('Buyer medicine requirements', () => {
  const valid = { buyer_name: 'Test Buyer', company_name: 'Test Hospital', email: 'buyer@example.com', phone: '+63 123 456 7890', country: 'Philippines', buyer_type: 'Hospital / Institution', products: ['ssi-2-2'], requirement_details: '5,000 vials, dossier required.', website: '' };
  it('accepts a Philippines institutional buyer with a listed medicine', () => { expect(inquirySchema.safeParse(valid).success).toBe(true); });
  it('rejects a product absent from the supplied portfolio', () => { expect(inquirySchema.safeParse({ ...valid, products: ['fake-medicine'] }).success).toBe(false); });
  it('requires a medicine selection', () => { expect(inquirySchema.safeParse({ ...valid, products: [] }).success).toBe(false); });
});