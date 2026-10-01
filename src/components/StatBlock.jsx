function StatBlock({ value, label }) {
  return (
    <div className="min-w-0 text-left">
      <p className="font-heading text-3xl font-bold leading-none text-blue sm:text-4xl">{value}</p>
      <p className="mt-2 font-body text-xs font-semibold text-muted sm:text-sm">{label}</p>
    </div>
  )
}

export default StatBlock