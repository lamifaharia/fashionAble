const tones = {
  new: 'bg-yolk text-ink',
  out: 'bg-ink/80 text-paper',
  sale: 'bg-ink text-yolk',
}

export default function Badge({ children, tone = 'new' }) {
  return (
    <span
      className={`inline-block px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider ${tones[tone]}`}
    >
      {children}
    </span>
  )
}