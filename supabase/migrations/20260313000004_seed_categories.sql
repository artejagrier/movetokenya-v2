-- Seed default article categories (matches existing site navigation)

INSERT INTO public.article_categories (name, slug) VALUES
  ('Latest News', 'latest-news'),
  ('Visa Updates', 'visa-updates'),
  ('Relocation Guides', 'relocation-guides'),
  ('Cost of Living', 'cost-of-living'),
  ('Real Estate', 'real-estate'),
  ('Investing', 'investing'),
  ('Diaspora Stories', 'diaspora-stories'),
  ('Events & Opportunities', 'events-opportunities')
ON CONFLICT (slug) DO NOTHING;
