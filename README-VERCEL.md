# Premium Portfolio — Vercel Ready

This is the cleaned Vercel-ready build source for the React + Vite + Tailwind portfolio.

## Deploy
1. Upload the contents of this folder to a new GitHub repository.
2. Import that repository into Vercel.
3. Vercel should detect Vite automatically.
4. Build command: `npm run build`
5. Output directory: `dist`

If the project uses Supabase environment variables, add them in Vercel Project Settings → Environment Variables rather than committing `.env` files.

Required variables should match the names used by the source code, typically:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

The included `vercel.json` enables SPA fallback routing.
