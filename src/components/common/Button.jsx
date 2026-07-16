const variants = {
  primary: 'bg-yolk text-ink hover:bg-yolk-dark',
  dark: 'bg-ink text-paper hover:bg-charcoal',
  outline: 'border-2 border-ink text-ink hover:bg-ink hover:text-paper',
  ghost: 'text-ink hover:bg-ink/5',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  as: Component = 'button',
  disabled = false,
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm tracking-wide transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  )
}