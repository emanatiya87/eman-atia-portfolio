export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-6 py-10 text-center">
      <p className="text-sm text-muted">
        © {new Date().getFullYear()} Eman Atia — Built with Next.js, TypeScript & Tailwind CSS.
      </p>
    </footer>
  );
}
