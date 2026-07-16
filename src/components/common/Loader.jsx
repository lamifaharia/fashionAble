export default function Loader({ label = 'Loading' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24" role="status" aria-live="polite">
      <div className="w-10 h-10 border-4 border-ink/10 border-t-yolk rounded-full animate-spin" />
      <p className="font-mono text-xs uppercase tracking-widest text-smoke">{label}</p>
    </div>
  )
}