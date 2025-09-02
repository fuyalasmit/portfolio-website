export function Background() {
  return (
    <>
      {/* Background Grid Pattern (very subtle) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      {/* Animated gradient orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/4 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500/4 rounded-full blur-3xl animate-pulse delay-1000" />
    </>
  );
}
