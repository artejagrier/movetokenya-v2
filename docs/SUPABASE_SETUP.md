# Supabase Backend Setup — MoveToKenya.org

Connect this site to your **existing** Supabase project (do not create a new one).

## 1. Environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in from **Supabase Dashboard → Project Settings → API**:

| Variable | Where to find it |
|----------|------------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | anon / public key |
| `SUPABASE_SERVICE_ROLE_KEY` | service_role key (keep secret) |

Add the same variables in **Vercel → Project → Settings → Environment Variables** for production.

---

## 2. Run SQL migrations

In your **existing** Supabase project, open **SQL Editor** and run each file **in order**:

1. `supabase/migrations/20260313000001_initial_schema.sql`
2. `supabase/migrations/20260313000002_rls_policies.sql`
3. `supabase/migrations/20260313000003_storage.sql`
4. `supabase/migrations/20260313000004_seed_categories.sql`
5. `supabase/migrations/20260313000005_promote_admin.sql`

Alternatively, if you use the Supabase CLI linked to this project:

```bash
supabase db push
```

---

## 3. Enable Email auth

In **Supabase Dashboard → Authentication → Providers**, ensure **Email** is enabled.

For production, configure **Site URL** and **Redirect URLs** under Authentication → URL Configuration:

- Site URL: `https://movetokenya.org`
- Redirect URLs: `https://movetokenya.org/**`, `http://localhost:3000/**`

---

## 4. Create the first admin account

### Step A — Create auth user

**Option 1 — Dashboard**

1. Go to **Authentication → Users → Add user**
2. Enter email and password
3. Confirm the user (auto-confirm if developing locally)

**Option 2 — Sign up via API/SQL**

Use the Supabase dashboard to invite or add the user manually.

### Step B — Promote to admin

After the user exists, run in **SQL Editor** (replace email):

```sql
SELECT public.promote_user_to_admin('your-email@example.com');
```

Or update directly:

```sql
UPDATE public.profiles
SET role = 'admin'
WHERE email = 'your-email@example.com';
```

### Step C — Sign in

Visit `/admin/login` and sign in with that account.

---

## 5. Deployment steps (Vercel)

1. Push code to GitHub
2. Import project in Vercel (or redeploy existing project)
3. Add all three environment variables
4. Deploy
5. Run migrations on your Supabase project (if not already done)
6. Create admin user and promote (Section 4)
7. Visit `https://movetokenya.org/admin`

---

## 6. Using the admin dashboard

| Route | Purpose |
|-------|---------|
| `/admin/login` | Sign in |
| `/admin` | List drafts & published articles |
| `/admin/articles/new` | Create article |
| `/admin/articles/[id]/edit` | Edit article |
| `/admin/categories` | Manage categories |

**Publishing flow:** Create or edit an article → check **Publish immediately** → save. The article appears on `/kenya-daily` and `/kenya-daily/[slug]`.

**Featured images:** Upload in the article form. Files go to the `article-images` storage bucket.

---

## 7. Public routes

| Route | Purpose |
|-------|---------|
| `/kenya-daily` | All published articles, filters, search |
| `/kenya-daily/[slug]` | Individual SEO article page |
| `/the-kenya-daily` | Redirects to `/kenya-daily` (legacy URLs) |

---

## 8. Database schema summary

### `article_categories`
- `id`, `name`, `slug`, `created_at`

### `profiles`
- `id` (links to `auth.users`), `email`, `role` (`admin` | `editor`), `created_at`

### `articles`
- `id`, `title`, `slug`, `excerpt`, `content`, `featured_image`, `category`, `seo_title`, `seo_description`, `published`, `created_at`, `updated_at`

---

## 9. Security notes

- Row Level Security (RLS) is enabled on all tables
- Public users can only **read published** articles and categories
- Only users with `profiles.role = 'admin'` can create, edit, or delete content
- `SUPABASE_SERVICE_ROLE_KEY` is optional for this app (admin uses authenticated RLS); keep it for future server scripts only

---

## 10. Troubleshooting

| Issue | Fix |
|-------|-----|
| Can't sign in to admin | Confirm user exists and `profiles.role = 'admin'` |
| Upload fails | Re-run storage migration; check bucket `article-images` exists |
| Articles not on site | Ensure `published = true` |
| 401 on admin | Check env vars and redeploy |
| Old URLs broken | `/the-kenya-daily` redirects to `/kenya-daily` |
