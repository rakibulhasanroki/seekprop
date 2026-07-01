"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full mt-2 px-4 py-2.5 rounded-xl border border-border bg-background text-sm outline-none focus:border-secondary"
        />
      </div>

      <div>
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Email Address
        </label>
        <input
          type="email"
          placeholder="name@example.com"
          className="w-full mt-2 px-4 py-2.5 rounded-xl border border-border bg-background text-sm outline-none focus:border-secondary"
        />
      </div>

      <div>
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Password
        </label>
        <div className="relative mt-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="w-full px-4 py-2.5 pr-10 rounded-xl border border-border bg-background text-sm outline-none focus:border-secondary"
          />
          <button
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Confirm Password
        </label>
        <div className="relative mt-2">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="••••••••"
            className="w-full px-4 py-2.5 pr-10 rounded-xl border border-border bg-background text-sm outline-none focus:border-secondary"
          />
          <button
            onClick={() => setShowConfirm((p) => !p)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
          >
            {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      <button className="w-full py-2.5 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
        Create Account
      </button>

      <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border text-sm font-medium text-primary hover:bg-muted transition-colors">
        <FaGoogle size={14} />
        Continue with Google
      </button>
    </div>
  );
}
