import { z } from 'zod';
import { products } from './products';

const productId = z.string().refine(id => products.some(p => p.id === id), 'Unknown product.');

export const inquirySchema = z.object({
  buyer_name: z.string().trim().min(2, 'Enter your full name.').max(100),
  company_name: z.string().trim().min(2, 'Enter your company name.').max(150),
  email: z.string().trim().email('Enter a valid business email.').max(255),
  phone: z.string().trim().max(40).regex(/^[+\d\s().-]*$/, 'Enter a valid phone number.'),
  country: z.string().trim().min(2, 'Enter your country.').max(80),
  buyer_type: z.enum(['Distributor', 'Hospital / Institution', 'Other']),
  products: z.array(productId).max(50, 'Select up to 50 medicines.').default([]),
  requirement_details: z.string().trim().max(2000).default(''),
  website: z.string().max(0),
});
export type InquiryInput = z.infer<typeof inquirySchema>;

export const requestListSchema = z.object({
  buyer_name: z.string().trim().min(2, 'Enter your full name.').max(100),
  company_name: z.string().trim().min(2, 'Enter your company name.').max(150),
  country: z.string().trim().min(2, 'Enter your country.').max(80),
  email: z.string().trim().email('Enter a valid business email.').max(255),
  website: z.string().max(0),
});
export type RequestListInput = z.infer<typeof requestListSchema>;
