import { Link } from 'react-router-dom'

function LearningPathCard({ path }) {
  const Icon = path.icon

  return (
    <Link
      to="/#courses"
      className="group flex min-h-[168px] flex-col items-center justify-center rounded-card border border-line bg-white px-3 py-5 text-center transition duration-200 hover:-translate-y-1 hover:shadow-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue active:translate-y-0 active:shadow-none"
    >
      <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-lime text-ink transition-transform duration-200 group-hover:scale-105">
        <Icon aria-hidden="true" size={27} strokeWidth={1.9} />
      </span>
      <span className="mt-4 font-heading text-sm font-bold text-ink">{path.label}</span>
    </Link>
  )
}

export default LearningPathCard