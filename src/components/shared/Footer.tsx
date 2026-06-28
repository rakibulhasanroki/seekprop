import { FaGlobe, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="mx-auto max-w-9/12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-secondary">SeekProp</h2>
            <p className="text-sm text-primary-foreground/50 leading-relaxed">
              Defining the standard for high-end property discovery and
              management since 2024.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-secondary transition-colors cursor-pointer">
                <FaGlobe size={14} className="text-primary-foreground/60" />
              </div>
              <div className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-secondary transition-colors cursor-pointer">
                <FaInstagram size={14} className="text-primary-foreground/60" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-primary-foreground">
              Quick Links
            </h3>
            <Link
              href="/about"
              className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/investors"
              className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors"
            >
              Investor Relations
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-primary-foreground">
              Support
            </h3>
            <Link
              href="/terms"
              className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors"
            >
              Cookie Policy
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-primary-foreground">
              Explore
            </h3>
            <Link
              href="/apartments"
              className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors"
            >
              Apartments
            </Link>
            <Link
              href="/villas"
              className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors"
            >
              Luxury Villas
            </Link>
            <Link
              href="/portfolios"
              className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors"
            >
              Global Portfolios
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2026 SeekProp Premium Real Estate. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-primary-foreground/40 hover:text-secondary transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-xs text-primary-foreground/40 hover:text-secondary transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="#"
              className="text-xs text-primary-foreground/40 hover:text-secondary transition-colors"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
