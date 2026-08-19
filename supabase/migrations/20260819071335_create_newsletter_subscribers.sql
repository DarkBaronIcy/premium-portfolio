/*
# Create newsletter_subscribers table (single-tenant, no auth)

1. New Tables
- `newsletter_subscribers`
  - `id` (uuid, primary key, auto-generated)
  - `email` (text, unique, not null) — the subscriber's email address
  - `created_at` (timestamptz, defaults to now) — subscription timestamp

2. Security
- Enable RLS on `newsletter_subscribers`.
- Allow anon + authenticated INSERT only — visitors can subscribe without signing in.
- No SELECT/UPDATE/DELETE for anon — subscriber emails are private and only viewable via the Supabase dashboard.
- This is a no-auth portfolio site, so the anon-key client handles inserts.

3. Notes
- The `email` column has a UNIQUE constraint to prevent duplicate subscriptions.
- Only INSERT is exposed publicly; all reads/updates/deletes are denied at the policy level.
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_subscribers" ON newsletter_subscribers;
CREATE POLICY "anon_insert_subscribers"
  ON newsletter_subscribers FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
