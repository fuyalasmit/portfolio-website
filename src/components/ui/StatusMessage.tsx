export function StatusMessage() {
  return (
    <div className="absolute bottom-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-1">
        <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse"></div>
        <p className="text-cyan-100 text-sm font-medium">Working...</p>
      </div>
      <p className="text-cyan-200 text-xs">Refactoring whole design & experience</p>
    </div>
  );
}
