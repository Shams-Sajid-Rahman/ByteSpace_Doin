const variants = {
  lime: 'border border-lime bg-lime text-ink hover:bg-[#b7e600] hover:border-[#b7e600]',
  ghost: 'border border-ink bg-transparent text-ink hover:bg-ink hover:text-white',
}

function Button({ variant = 'lime', className = '', type = 'button', children, ...props }) {
  return (
    <button
      className={`inline-flex min-h-12 items-center justify-center rounded-pill px-6 font-body text-base font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue active:scale-[0.98] ${variants[variant] ?? variants.lime} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button