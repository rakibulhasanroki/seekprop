import AuthHero from "@/components/auth/AuthHero";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex h-screen w-full">
      <div className="flex flex-1 flex-col justify-center px-12 py-10">
        <div className="mx-auto w-full max-w-md flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-bold text-primary">Welcome Back</h1>
            <p className="text-sm text-secondary mt-1">
              Please enter your details to access your account.
            </p>
          </div>

          <p className="text-sm text-center text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-secondary font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <AuthHero />
    </main>
  );
}
