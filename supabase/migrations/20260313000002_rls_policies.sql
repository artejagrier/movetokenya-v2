-- Row Level Security policies

ALTER TABLE public.article_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- article_categories: public read, admin write
DROP POLICY IF EXISTS "Public read categories" ON public.article_categories;
CREATE POLICY "Public read categories"
  ON public.article_categories FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "Admin manage categories" ON public.article_categories;
CREATE POLICY "Admin manage categories"
  ON public.article_categories FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- profiles: users read own profile; admins read all
DROP POLICY IF EXISTS "Users read own profile" ON public.profiles;
CREATE POLICY "Users read own profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id OR public.is_admin());

DROP POLICY IF EXISTS "Admins update profiles" ON public.profiles;
CREATE POLICY "Admins update profiles"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- articles: public read published; admin full access
DROP POLICY IF EXISTS "Public read published articles" ON public.articles;
CREATE POLICY "Public read published articles"
  ON public.articles FOR SELECT
  TO anon, authenticated
  USING (published = true);

DROP POLICY IF EXISTS "Admin read all articles" ON public.articles;
CREATE POLICY "Admin read all articles"
  ON public.articles FOR SELECT
  TO authenticated
  USING (public.is_admin());

DROP POLICY IF EXISTS "Admin insert articles" ON public.articles;
CREATE POLICY "Admin insert articles"
  ON public.articles FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admin update articles" ON public.articles;
CREATE POLICY "Admin update articles"
  ON public.articles FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admin delete articles" ON public.articles;
CREATE POLICY "Admin delete articles"
  ON public.articles FOR DELETE
  TO authenticated
  USING (public.is_admin());
