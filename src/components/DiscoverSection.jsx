import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import CategoryPills from './CategoryPills.jsx'
import CourseCard from './CourseCard.jsx'
import { categories } from '../data/categories.js'
import { courses } from '../data/courses.js'

function DiscoverSection() {
  const [activeCategory, setActiveCategory] = useState('Featured')
  const location = useLocation()
  const searchTerm = new URLSearchParams(location.search).get('q')?.trim().toLowerCase() ?? ''
  const categoryCourses = activeCategory === 'Featured'
    ? courses
    : courses.filter((course) => course.category === activeCategory)
  const filteredCourses = searchTerm
    ? categoryCourses.filter((course) => `${course.title} ${course.category} ${course.instructor}`.toLowerCase().includes(searchTerm))
    : categoryCourses

  return (
    <section id="courses" aria-labelledby="discover-heading" className="scroll-mt-8 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <header className="mx-auto max-w-[740px] text-center">
          <h2 id="discover-heading" className="font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mx-auto mt-4 max-w-[690px] font-body text-base leading-7 text-muted">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </header>

        <div className="mt-8 sm:mt-10">
          <CategoryPills
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {filteredCourses.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        ) : (
          <p className="mt-12 rounded-card border border-line bg-pill/50 px-6 py-12 text-center font-body text-base font-semibold text-muted" role="status">
            No courses found. Try another category.
          </p>
        )}
      </div>
    </section>
  )
}

export default DiscoverSection