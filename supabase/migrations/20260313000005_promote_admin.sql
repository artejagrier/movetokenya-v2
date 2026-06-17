-- Helper: promote an existing auth user to admin by email
-- Usage (replace email):
--   SELECT public.promote_user_to_admin('you@example.com');

CREATE OR REPLACE FUNCTION public.promote_user_to_admin(user_email TEXT)
RETURNS VOID AS $$
DECLARE
  uid UUID;
BEGIN
  SELECT id INTO uid FROM auth.users WHERE email = user_email LIMIT 1;
  IF uid IS NULL THEN
    RAISE EXCEPTION 'No auth user found with email: %', user_email;
  END IF;

  INSERT INTO public.profiles (id, email, role)
  VALUES (uid, user_email, 'admin')
  ON CONFLICT (id) DO UPDATE SET role = 'admin', email = EXCLUDED.email;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

GRANT EXECUTE ON FUNCTION public.promote_user_to_admin(TEXT) TO service_role;
