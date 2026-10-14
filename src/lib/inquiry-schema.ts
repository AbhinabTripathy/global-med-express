import { z } from 'zod';
import { products } from './products';
export const inquirySchema = z.object({
  buyer_name: z.string().trim().min(2, 'Enter your full name.').max(100),
  company_name: z.string().trim().min(2, 'Enter your company name.').max(150),
  email: z.string().trim().email('Enter a valid business email.').max(255),
  phone: z.string().trim().max(40).regex(/^[+\d\s().-]*$/, 'Enter a valid phone number.'),
  country: z.string().trim().min(2, 'Select your destination country.').max(80),
  buyer_type: z.enum(['Distributor', 'Hospital / Institution', 'Government / Tender', 'Other']),
  products: z.array(z.string().refine(id => products.some(p => p.id === id), 'Unknown product.')).min(1, 'Select at least one medicine.').max(50),
  requirement_details: z.string().trim().min(10, 'Include quantities and your requirements.').max(2000),
  website: z.string().max(0),
});
export type InquiryInput = z.infer<typeof inquirySchema>;