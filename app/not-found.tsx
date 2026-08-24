import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-6 py-24">
      <div className="w-full max-w-2xl border-l-2 border-accent pl-6 sm:pl-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          404 / Page not found
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">
          This page does not exist.
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
          The page you are looking for may have moved or the address may be
          incorrect.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
    </main>
  );
}
