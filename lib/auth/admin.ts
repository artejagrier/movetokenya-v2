import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import type { Profile } from "@/lib/types/database";

export async function getSessionUser() {
  if (!isSupabaseConfigured()) return null;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export async function getProfile(userId: string): Promise<Profile | null> {
  if (!isSupabaseConfigured()) return null;
  const supabase = await createClient();
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();
  return data;
}

export async function requireAdmin() {
  if (!isSupabaseConfigured()) {
    redirect("/admin/login?error=Supabase+is+not+configured");
  }

  const user = await getSessionUser();
  if (!user) {
    redirect("/admin/login");
  }

  const profile = await getProfile(user.id);
  if (!profile || profile.role !== "admin") {
    redirect("/admin/login?error=unauthorized");
  }

  return { user, profile };
}
