import { BarChart3, BookOpen, Clock3, MessageCircle, Star } from 'lucide-react'
import AvatarStack from './AvatarStack.jsx'
import { avatarImages } from '../data/showcaseImages.js'

function CourseCard({ course }) {
  return (
    <article tabIndex={0} className="group min-w-0 rounded-card border border-line bg-white p-3 transition duration-200 hover:-translate-y-1 hover:shadow-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue active:translate-y-0 active:shadow-none">
      <div className="relative overflow-hidden rounded-[18px]">
        <img
          className="aspect-[4/3] w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
          src={course.image}
          alt={`${course.title} course thumbnail`}
          decoding="async"
          height="480"
          loading="lazy"
          width="640"
        />
        <div className="absolute inset-x-2 bottom-2 flex flex-wrap items-center gap-1.5">
          <span className="inline-flex min-h-7 items-center gap-1 rounded-pill bg-[#e7e8ec]/90 px-2.5 font-body text-[10px] font-semibold text-ink backdrop-blur-sm">
            <BookOpen aria-hidden="true" size={12} /> {course.lessons} Lessons
          </span>
          <span className="inline-flex min-h-7 items-center gap-1 rounded-pill bg-[#e7e8ec]/90 px-2.5 font-body text-[10px] font-semibold text-ink backdrop-blur-sm">
            <Clock3 aria-hidden="true" size={12} /> {course.duration}
          </span>
          <span className="inline-flex min-h-7 items-center gap-1 rounded-pill bg-[#e7e8ec]/90 px-2.5 font-body text-[10px] font-semibold text-ink backdrop-blur-sm">
            <MessageCircle aria-hidden="true" size={12} /> {course.comments} Comments
          </span>
        </div>
      </div>

      <div className="mt-4 flex min-w-0 items-center gap-2">
        <h3 className="min-w-0 flex-1 truncate font-heading text-base font-bold text-ink" title={course.title}>
          {course.title}
        </h3>
        <span className="inline-flex shrink-0 items-center gap-1 font-body text-sm font-semibold text-muted" aria-label={`Rated ${course.rating} out of 5 stars`}>
          {course.rating.toFixed(1)} <Star aria-hidden="true" className="fill-current text-[#805700]" size={13} />
        </span>
      </div>

      <p className="mt-1 font-body text-sm font-semibold text-blue">by {course.instructor}</p>

      <div className="mt-4 flex min-w-0 items-center justify-between gap-2">
        <span className="inline-flex min-h-8 shrink-0 items-center gap-1.5 rounded-pill bg-pill px-3 font-body text-xs font-semibold text-ink">
          <BarChart3 aria-hidden="true" size={14} /> {course.level}
        </span>
        <AvatarStack images={avatarImages.slice(0, 4)} badgeText="26+" size={28} />
      </div>

      <div className="mt-4 flex items-baseline gap-2 border-t border-line pt-3">
        <span className="font-heading text-lg font-bold text-blue">${course.price}</span>
        <span className="font-body text-xs font-medium text-muted">/lifetime</span>
      </div>
    </article>
  )
}

export default CourseCard