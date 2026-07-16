export default function PageTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 animate-fadeUp">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-yolk-dark mb-2">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-4xl md:text-5xl uppercase tracking-tight">{title}</h1>
      {subtitle && <p className="text-smoke mt-3 max-w-xl">{subtitle}</p>}
    </div>
  )
}