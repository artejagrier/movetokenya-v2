-- Storage bucket for article featured images

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'article-images',
  'article-images',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO NOTHING;

-- Public read
DROP POLICY IF EXISTS "Public read article images" ON storage.objects;
CREATE POLICY "Public read article images"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'article-images');

-- Admin upload / update / delete
DROP POLICY IF EXISTS "Admin upload article images" ON storage.objects;
CREATE POLICY "Admin upload article images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'article-images'
    AND public.is_admin()
  );

DROP POLICY IF EXISTS "Admin update article images" ON storage.objects;
CREATE POLICY "Admin update article images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'article-images' AND public.is_admin())
  WITH CHECK (bucket_id = 'article-images' AND public.is_admin());

DROP POLICY IF EXISTS "Admin delete article images" ON storage.objects;
CREATE POLICY "Admin delete article images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'article-images' AND public.is_admin());
