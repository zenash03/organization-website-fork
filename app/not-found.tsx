import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function NotFound() {
  const supabase = createSupabaseServerClient();
  const { data } = await supabase.auth.getSession();
  
  if(data?.session) return redirect("/admin");
  return redirect("/");
}