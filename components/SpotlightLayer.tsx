// Purely presentational: reads --spot-x/--spot-y custom properties set by
// an ancestor's onMouseMove handler (see Hero.tsx). pointer-events-none so
// it never blocks clicks on the content beneath it.
export function SpotlightLayer() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(400px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(76,217,232,0.15), transparent 70%)",
      }}
    />
  );
}
