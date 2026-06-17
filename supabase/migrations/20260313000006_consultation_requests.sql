-- Consultation requests from homepage / contact forms

CREATE TABLE IF NOT EXISTS public.consultation_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  location TEXT,
  passport_status TEXT,
  move_timeline TEXT,
  interest_type TEXT,
  moving_with TEXT,
  questions TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS consultation_requests_created_at_idx
  ON public.consultation_requests (created_at DESC);

CREATE INDEX IF NOT EXISTS consultation_requests_email_idx
  ON public.consultation_requests (email);

ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can submit consultation requests" ON public.consultation_requests;
CREATE POLICY "Anyone can submit consultation requests"
  ON public.consultation_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Admin read consultation requests" ON public.consultation_requests;
CREATE POLICY "Admin read consultation requests"
  ON public.consultation_requests FOR SELECT
  TO authenticated
  USING (public.is_admin());

DROP POLICY IF EXISTS "Admin delete consultation requests" ON public.consultation_requests;
CREATE POLICY "Admin delete consultation requests"
  ON public.consultation_requests FOR DELETE
  TO authenticated
  USING (public.is_admin());
