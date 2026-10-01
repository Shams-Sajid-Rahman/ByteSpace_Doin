import TestimonialCard from './TestimonialCard.jsx'
import { testimonials } from '../data/testimonials.js'

function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading" className="relative isolate overflow-hidden bg-[#fbfcff] py-16 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-lime/20 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[440px] w-[440px] rounded-full bg-blue/10 blur-[120px]" />
      <div className="container mx-auto px-6">
        <header className="grid items-end gap-5 md:grid-cols-2 md:gap-12">
          <h2 id="testimonials-heading" className="max-w-[520px] font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[640px] font-body text-base leading-7 text-muted">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </header>
        <div className="mt-9 grid items-start gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection