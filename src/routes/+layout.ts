import { createBrowserClient,createServerClient,isBrowser,} from "@supabase/ssr";
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL,} from "$env/static/public";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ data, depends, fetch , url }) => {
  // Declare a dependency on Supabase authentication
  depends("supabase:auth");

  // Initialize the Supabase client differently based on whether the code is running in the browser or on the server
  const supabase = isBrowser()
      ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch, // Use the global fetch API for requests
        },
      })
      : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch, // Use the global fetch API for server-side requests
        },
        cookies: {
          getAll() {
            return data.cookies; // Retrieve cookies when running on the server
          },
        },
      });

    // Retrieve the current session from Supabase
    const {
      data: { session },
    } = await supabase.auth.getSession();

    // Retrieve the currently authenticated user from Supabase
    const {
      data: { user },
    } = await supabase.auth.getUser();



    // Return the session, the Supabase client instance, and the user data
    return { session, supabase, user };
};
