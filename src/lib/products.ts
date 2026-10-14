export type Product = { id: string; name: string; category: string; form: string; presentation: string };

const portfolio: Record<string, string[]> = {
  'Anti-Infectives & Antivirals': [
    'Chloramphenicol Sodium Succinate Injection USP 1000 mg', 'Aciclovir Sodium for Infusion BP 250 mg', 'Aciclovir Sodium for Infusion BP 500 mg', 'Gentamicin Sulphate Injection 40 mg/ml — 2 ml', 'Gentamicin Sulphate Injection 40 mg/ml — 100 ml', 'Oxytetracycline HCl Injection 50 mg/ml — 100 ml', 'Lincomycin Injection USP 300 mg/ml — 2 ml',
  ],
  'Anti-Malarials': ['Artesunate for Injection 30 mg', 'Artesunate for Injection 60 mg', 'Artesunate for Injection 120 mg', 'α-β Arteether Injection 75 mg/ml — 1 ml Ampoule', 'α-β Arteether Injection 75 mg/ml — 2 ml Ampoule', 'Artemether Injection 40 mg/ml — 1 ml Ampoule', 'Artemether Injection 80 mg/ml — 1 ml Ampoule', 'Artemether Injection 150 mg/ml — 2 ml Ampoule'],
  'Gastroenterology & Antiemetics': ['Pantoprazole for Injection 40 mg', 'Esomeprazole Sodium for Injection 40 mg', 'Ondansetron Injection 2 mg/ml — 2 ml Ampoule', 'Drotaverine Hydrochloride Injection 40 mg/2 ml — 2 ml Ampoule'],
  'Corticosteroids': ['Hydrocortisone Sodium Succinate for Injection 500 mg', 'Betamethasone Sodium Phosphate Injection — 1 ml Ampoule', 'Betamethasone Injection BP — 1 ml Ampoule', 'Triamcinolone Acetonide 40 mg Injection — 1 ml Ampoule', 'Dexamethasone Sodium Phosphate Injection — 2 ml', 'Dexamethasone Sodium Phosphate Injection — 30 ml', 'Prednisolone Sodium Phosphate Injection USP 5 mg/ml — 10 ml', 'Triamcinolone Acetonide 40 mg Injection — 1 ml Vial', 'Triamcinolone Acetonide 40 mg Injection — 2 ml Vial'],
  'Neurology / CNS': ['Mecobalamin Injection 1000 mcg — 2 ml Ampoule', 'Fluphenazine Decanoate Injection BP 25 mg', 'Levetiracetam Injection USP 100 mg/ml — 5 ml Vial', 'Mecobalamine Injection 1500 mcg/ml'],
  'Cardiovascular & Emergency Care': ['Pralidoxime Injection USP 500 mg', 'Etofylline & Theophylline Injection', 'Amiodarone Infusion BP 150 mg/3 ml', 'Furosemide Injection BP 10 mg — 2 ml Ampoule', 'Methylene blue Injection USP 10 mg/ml Ampoule', 'Adrenaline Injection BP 1 mg/ml — 1 ml Ampoule', 'Noradrenaline Injection BP 1 mg/ml — 2 ml Ampoule', 'Adrenaline Injection 1 mg/ml — 1 ml Ampoule', 'Atropine Sulfate Injection 0.6 mg/ml — 1 ml Ampoule', 'Sodium Bicarbonate 7.5% Injection USP — 10 ml Ampoule', 'Sodium Bicarbonate 5% Injection USP — 1 ml Ampoule', 'Sodium Bicarbonate 5% Injection USP — 2 ml Ampoule', 'Labetalol Hydrochloride Injection USP 100 mg/20 ml (5 mg/ml)'],
  'Maternal Health & Hematinics': ['Iron Sucrose Injection 2.5 ml Ampoule', 'Vitamin B1 100 mg + Vitamin B6 200 mg + Vitamin B12 25000 mcg Injection', 'Phytomenadione Injection BP 1 mg/ml — 1 ml Ampoule', 'Phytomenadione Injection BP 10 mg/ml — 1 ml Ampoule', 'Magnesium Sulphate Injection BP 50% w/v — 2 ml Ampoule', 'Folic Acid, Cyanocobalamin, Nicotinamide Injection — 10 ml Vial', 'Vitamin B Complex Injection — 10 ml', 'Vitamin B1 100 mg + Vitamin B6 100 mg + Vitamin B12 1000 mcg/2 ml', 'Vitamin B1 100 mg + Vitamin B6 100 mg + Vitamin B12 1500 mcg/2 ml'],
  'Anticoagulants': ['Heparin Sodium Injection BP 1000 IU/ml — 5 ml Vial', 'Heparin Sodium Injection BP 5000 IU/ml — 5 ml Vial', 'Enoxaparin Sodium Injection 20 mg/0.2 ml', 'Enoxaparin Sodium Injection 40 mg/0.4 ml', 'Enoxaparin Sodium Injection 60 mg/0.6 ml', 'Enoxaparin Sodium Injection 80 mg/0.8 ml'],
  'Analgesics & NSAIDs': ['Diclofenac Sodium Injection 75 mg/3 ml Ampoule', 'Dipyrone Injection 500 mg/ml — 2 ml Ampoule', 'Paracetamol Injection IH — 100 mg/ml — 5 ml Ampoule', 'Paracetamol Injection 150 mg/ml — 20 ml'],
  'Local Anesthetics': ['Lidocaine & Adrenaline Injection BP — 30 ml Vial', 'Lignocaine HCl & Adrenaline Bitartrate Injection IP — 30 ml', 'Lignocaine 1% with Adrenaline Injection — 30 ml', 'Lignocaine HCl & Adrenaline Injection IP (1:200000) — 30 ml'],
  'Antihistamines & Anti-Allergic': ['Diphenhydramine Hydrochloride Injection USP 10 mg/ml — 1 ml Ampoule', 'Pheniramine Injection IP 22.75 mg/ml — 100 ml Vial'],
  'IV Fluids & Electrolytes': ['Sodium Chloride Injection BP 0.9% w/v — 5 ml', 'Sodium Chloride Injection BP 0.9% w/v — 10 ml'],
  'Antiparasitic': ['Ivermectin Injection IP 1% w/v — 100 ml'],
  'Ophthalmic & ENT Care': ['Boric Acid Eye/Ear Drops 2% w/v — 15 ml Bottle', 'Ciprofloxacin Ophthalmic Solution USP 0.3% w/v — 5 ml & 10 ml Plastic Bottle', 'Dexamethasone Sodium Phosphate Ophthalmic Solution USP 0.1% w/v — 5 ml Plastic Bottle', 'Betamethasone Sodium Phosphate Ophthalmic Solution 0.1% w/v — 5 ml Plastic Bottle', 'Betamethasone Sodium Phosphate 0.1% and Neomycin Sulfate 0.5% Eye/Ear/Nose Drops — 5 ml & 10 ml Plastic Bottle', 'Neomycin Sulfate 0.5% & Dexamethasone Sodium Phosphate 0.1% Ophthalmic Solution USP — 3 ml & 5 ml Plastic Bottle', 'Gentamicin Sulfate Ophthalmic Solution USP 0.3% w/v — 5 ml & 10 ml Plastic Bottle', 'Chloramphenicol Ophthalmic Solution USP 0.5% w/v — 5 ml & 10 ml Plastic Bottle', 'Ciprofloxacin + Hydrocortisone Eye Drops 5 ml Plastic Bottle'],
  'Endocrinology & Metabolic Care': ['Semaglutide Injection 1 mg/1.5 ml', 'Semaglutide Injection 2 mg/1.5 ml', 'Semaglutide Injection 4 mg/3 ml', 'Semaglutide Injection 6.8 mg/3 ml', 'Colecalciferol Injection 300000 IU/ml', 'Colecalciferol Injection 600000 IU/ml'],
  'Orthopedic & Joint Care': ['Sodium Hyaluronate Injection 25 mg/2.5 ml', 'Sodium Hyaluronate Injection 10 mg/ml'],
  'Animal Health': ['Meloxicam Injection BP (Veterinary) — 100 ml', 'Meloxicam & Paracetamol Injection (Veterinary) — 100 ml', 'Amikacin Sulphate Injection IP 250 mg/ml (Veterinary) — 100 ml'],
};

export const categories = Object.keys(portfolio);
export const products: Product[] = Object.entries(portfolio).flatMap(([category, names], categoryIndex) => names.map((name, i) => {
  const form = category === 'Ophthalmic & ENT Care' ? 'Eye / Ear Drop' : /Ampoule/i.test(name) ? 'Ampoule' : /^Enoxaparin|^Semaglutide|^Sodium Hyaluronate/.test(name) ? 'Prefilled Syringe' : /for Injection|for Infusion|Chloramphenicol Sodium|Pralidoxime/.test(name) ? 'Dry Powder Vial' : 'Liquid Vial';
  const presentation = name.match(/\d[\d.]*\s*(?:mg|mcg|IU|%)[\s\S]*/)?.[0] ?? 'Specification on inquiry';
  return { id: `ssi-${categoryIndex + 1}-${i + 1}`, name, category, form, presentation };
}));
export const forms = ['Dry Powder Vial', 'Liquid Vial', 'Ampoule', 'Prefilled Syringe', 'Eye / Ear Drop'];
export function filterProducts(query: string, category: string, form: string) {
  const term = query.trim().toLowerCase();
  return products.filter(p => (!term || `${p.name} ${p.category}`.toLowerCase().includes(term)) && (category === 'All categories' || p.category === category) && (form === 'All forms' || p.form === form));
}