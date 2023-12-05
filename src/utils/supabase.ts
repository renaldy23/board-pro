import { createClient } from '@supabase/supabase-js';

export const supabaseClient = async (supabaseAccessToken: string) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    },
  );

  return supabase;
};
