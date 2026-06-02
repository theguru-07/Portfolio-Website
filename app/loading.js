export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
      <div className="flex flex-col items-center gap-4">
        {/* Pulsing logo */}
        <div className="w-12 h-12 rounded-full border-2 border-sky-400/60 border-t-sky-400 animate-spin" />
        <span className="text-sky-400/60 text-sm font-mono tracking-widest animate-pulse">
          LOADING
        </span>
      </div>
    </div>
  );
}
