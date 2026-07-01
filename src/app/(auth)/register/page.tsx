import AuthHero from "@/components/auth/AuthHero";
import SignupForm from "@/components/auth/SignupForm";
import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="flex h-screen w-full">
      <AuthHero />
      <div className="flex flex-1 flex-col justify-center px-12 py-10">
        <div className="mx-auto w-full max-w-md flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-bold text-primary">Create Account</h1>
            <p className="text-sm text-secondary mt-1">
              Join our exclusive network of property investors.
            </p>
          </div>
          <SignupForm />
          <p className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-secondary font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
