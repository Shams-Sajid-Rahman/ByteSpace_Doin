import { Quote } from 'lucide-react'

function TestimonialCard({ testimonial }) {
  return (
    <article tabIndex={0} className={`rounded-card bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue active:translate-y-0 sm:p-7 ${testimonial.height}`}>
      <div className="flex items-center gap-3">
        <img className="h-12 w-12 shrink-0 rounded-full object-cover" src={testimonial.image} alt={`${testimonial.name} portrait`} decoding="async" height="128" loading="lazy" width="128" />
        <div className="min-w-0">
          <h3 className="font-heading text-base font-bold text-ink">{testimonial.name}</h3>
          <p className="mt-0.5 font-body text-sm font-semibold text-blue">{testimonial.role}</p>
        </div>
        <Quote aria-hidden="true" className="ml-auto shrink-0 text-blue/45" size={24} />
      </div>
      <blockquote className="mt-6 font-body text-base leading-7 text-muted">“{testimonial.quote}”</blockquote>
    </article>
  )
}

export default TestimonialCard