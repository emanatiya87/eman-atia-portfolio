export default function Loading() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-ink px-6"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-accent" />
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          Loading
        </p>
      </div>
    </main>
  );
}
