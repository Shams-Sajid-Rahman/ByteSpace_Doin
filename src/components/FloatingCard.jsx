function FloatingCard({ children, className = '' }) {
  return (
    <aside className={`rounded-card bg-white p-5 text-left text-ink shadow-soft ${className}`}>
      {children}
    </aside>
  )
}

export default FloatingCard