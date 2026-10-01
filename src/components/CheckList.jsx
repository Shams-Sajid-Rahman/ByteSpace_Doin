import { Check } from 'lucide-react'

function CheckList({ items }) {
  return (
    <ul className="mt-7 grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex min-w-0 items-center gap-3 font-body text-sm font-semibold text-ink sm:text-base">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue text-white">
            <Check aria-hidden="true" size={14} strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default CheckList