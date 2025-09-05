import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

export function createServerSupabaseClient() {
  const cookieStore = cookies(); // 同期で取得可能
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, // サーバー用 key 推奨
    {
      global: {
        fetch,
      },
      auth: {
        persistSession: false, // SSR では session を永続化しない
        getCookie: (name) => cookieStore.get(name).value,
      },
    }
  );
}
