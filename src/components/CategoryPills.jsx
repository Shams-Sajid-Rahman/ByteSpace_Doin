import { useState } from 'react'

function CategoryPills({ categories, activeCategory, onChange }) {
  const [expanded, setExpanded] = useState(false)
  const visibleCategories = expanded ? categories : categories.slice(0, 9)

  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5" role="group" aria-label="Filter courses by category">
      {visibleCategories.map((category) => {
        const active = category === activeCategory

        return (
          <button
            key={category}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(category)}
            className={`min-h-10 rounded-pill px-5 font-body text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue active:scale-[0.97] ${active ? 'bg-lime text-ink' : 'bg-pill text-ink hover:bg-[#e8e8ed]'}`}
          >
            {category}
          </button>
        )
      })}
      {categories.length > 9 && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((isExpanded) => !isExpanded)}
          className="min-h-10 rounded-pill px-3 font-body text-sm font-bold text-blue transition-colors hover:text-[#002bb3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue active:scale-[0.97]"
        >
          {expanded ? '− Less' : '+ More'}
        </button>
      )}
    </div>
  )
}

export default CategoryPills