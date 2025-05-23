import { redirect } from '@sveltejs/kit';

export const GET = async (event : any) => {
	const {
		url,
		locals: { supabase }
	} = event;
	const code = url.searchParams.get('code') as string;
	const next = url.searchParams.get('next') ?? '/';

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      throw redirect(303, "/private/market");
    }
  }

  // return the user to an error page with instructions
  throw redirect(303, '/auth/error');
};