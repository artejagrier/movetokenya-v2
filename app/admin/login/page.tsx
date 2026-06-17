import { signIn } from "@/lib/admin/actions";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1a1a1a] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-2 text-2xl font-bold text-[#1a1a1a]">Admin Login</h1>
        <p className="mb-6 text-sm text-[#6b6b6b]">
          Sign in to manage The Kenya Daily articles.
        </p>

        {error && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error === "unauthorized"
              ? "Your account does not have admin access."
              : decodeURIComponent(error)}
          </div>
        )}

        <form action={signIn} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1a1a1a]">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#C8102E]"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1a1a1a]">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#C8102E]"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
