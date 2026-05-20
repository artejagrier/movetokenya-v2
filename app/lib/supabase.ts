import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qfbpoocvlbxptgebtlvb.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmYnBvb2N2bGJ4cHRnZWJ0bHZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNTk5NTEsImV4cCI6MjA5NDczNTk1MX0.4nyuYx3tcIm6d0oAh9azrAliRUumf9OrPFqvfiq5Y98";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);