export default function ProjectLoading() {
  return (
    <main className="min-h-screen bg-ink px-6 py-24" aria-busy="true">
      <div className="mx-auto max-w-3xl animate-pulse">
        <div className="h-4 w-28 rounded bg-white/10" />
        <div className="mt-10 h-3 w-24 rounded bg-accent/30" />
        <div className="mt-4 h-10 max-w-xl rounded bg-white/10" />
        <div className="mt-4 h-4 max-w-2xl rounded bg-white/10" />
        <div className="mt-8 flex gap-2">
          <div className="h-6 w-20 rounded bg-white/10" />
          <div className="h-6 w-24 rounded bg-white/10" />
          <div className="h-6 w-16 rounded bg-white/10" />
        </div>
        <div className="mt-14 space-y-8 border-t border-white/10 pt-10">
          <div>
            <div className="h-3 w-28 rounded bg-accent/30" />
            <div className="mt-4 h-16 rounded bg-white/10" />
          </div>
          <div>
            <div className="h-3 w-32 rounded bg-accent/30" />
            <div className="mt-4 h-20 rounded bg-white/10" />
          </div>
        </div>
      </div>
    </main>
  );
}
