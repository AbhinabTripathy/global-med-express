import { createServerFn } from '@tanstack/react-start';
import { inquirySchema } from './inquiry-schema';
import { products } from './products';

export const submitInquiry = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => inquirySchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { website: _website, ...fields } = data;
    const { data: row, error } = await supabaseAdmin.from('product_inquiries').insert({
      ...fields,
      products: fields.products.map(id => products.find(p => p.id === id)?.name ?? id),
    }).select('id').single();
    if (error || !row) throw new Error('Your inquiry could not be saved. Please try again.');
    return { reference: row.id };
  });