import LearningPathCard from './LearningPathCard.jsx'
import { learningPaths } from '../data/paths.js'

function LearningPathsSection() {
  return (
    <section aria-labelledby="learning-paths-heading" className="border-t border-line py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <header className="mx-auto max-w-[760px] text-center">
          <h2 id="learning-paths-heading" className="font-heading text-2xl font-bold leading-tight text-ink sm:text-[28px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto mt-3 max-w-[720px] font-body text-base leading-7 text-muted">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </header>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-3 xl:grid-cols-6">
          {learningPaths.map((path) => (
            <LearningPathCard key={path.label} path={path} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningPathsSection