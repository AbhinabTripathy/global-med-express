import { createServerFn } from '@tanstack/react-start';
import { requestListSchema } from './inquiry-schema';

export const requestProductList = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => requestListSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { website: _website, ...fields } = data;
    const { data: row, error } = await supabaseAdmin.from('portfolio_requests').insert(fields).select('id').single();
    if (error || !row) throw new Error('Your request could not be saved. Please try again.');
    return { reference: row.id };
  });
