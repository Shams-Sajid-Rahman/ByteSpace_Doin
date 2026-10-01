import { ArrowUpRight } from 'lucide-react'
import AvatarStack from './AvatarStack.jsx'
import CheckList from './CheckList.jsx'
import FloatingCard from './FloatingCard.jsx'
import StatBlock from './StatBlock.jsx'
import limeSquiggle from '../assets/Frame05.svg'
import { avatarImages } from '../data/showcaseImages.js'
import { growthChecklist, growthImages, growthStats } from '../data/growth.js'

function GrowthImagePanel({ kind }) {
  const isCreator = kind === 'creator'
  const photo = isCreator ? growthImages.creator : growthImages.professional

  return (
    <div className="relative mx-auto h-[410px] w-full max-w-[470px] sm:h-[470px] lg:h-[500px]">
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-lime/80 sm:h-[360px] sm:w-[360px]" />
      <img
          className={`absolute bottom-0 left-1/2 z-10 h-[350px] w-[440px] -translate-x-1/2 object-contain sm:h-[410px] sm:w-[500px] ${isCreator ? 'rounded-t-[150px] object-cover object-[58%_center] sm:rounded-t-[175px]' : ''}`}
        src={photo.src}
        alt={photo.alt}
        decoding="async"
        height="410"
        loading="lazy"
        width="325"
      />
      <img
        src={limeSquiggle}
        alt=""
        className="absolute right-[3%] top-[45%] z-20 h-16 w-24 rotate-[-16deg] object-contain sm:right-[5%] sm:top-[42%] sm:h-24 sm:w-36"
        width="334"
        height="199"
      />

      {isCreator ? (
        <>
          <FloatingCard className="!bg-blue !text-white absolute left-0 top-[5%] z-20 w-[178px] p-3 sm:left-[2%] sm:w-[205px] sm:p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-body text-xs font-semibold text-white/90">Total Revenue</p>
                <p className="mt-1 text-[11px] font-medium text-white/80">July 1-28</p>
              </div>
              <span className="rounded-pill bg-lime px-2 py-1 text-[10px] font-bold text-ink">+12$</span>
            </div>
            <p className="mt-1 font-heading text-xl font-bold text-white">$120.29</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-pill bg-white/20" role="progressbar" aria-label="Revenue progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="68">
              <div className="h-full w-[68%] rounded-pill bg-lime" />
            </div>
          </FloatingCard>
          <FloatingCard className="!bg-blue !text-white absolute right-0 top-[30%] z-20 w-[165px] p-3 sm:right-[1%] sm:w-[185px] sm:p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-body text-xs font-semibold text-white">Year to Date</p>
                <p className="mt-1 text-[11px] font-medium text-white">2023</p>
              </div>
              <span className="rounded-pill bg-lime px-2 py-1 text-[10px] font-bold text-ink">+12$</span>
            </div>
            <p className="mt-2 font-heading text-xl font-bold text-white">$1,200.38</p>
          </FloatingCard>
          <FloatingCard className="absolute bottom-[4%] right-0 z-20 w-[205px] p-3 sm:right-[1%] sm:w-[225px] sm:p-4">
            <p className="font-heading text-sm font-bold">Happy Students</p>
            <p className="mt-1 font-body text-xs font-semibold text-muted">4.5 (240) <span className="text-[#805700]">★</span></p>
            <AvatarStack className="mt-2" images={avatarImages} badgeText="2K+" size={30} />
          </FloatingCard>
        </>
      ) : (
        <>
          <FloatingCard className="absolute left-0 top-[8%] z-20 w-[190px] p-3 sm:left-[2%] sm:w-[220px] sm:p-4">
            <img className="aspect-[16/9] w-full rounded-xl object-cover" src={growthImages.course} alt="Digital design course thumbnail" decoding="async" height="360" loading="lazy" width="640" />
            <h3 className="mt-2 truncate font-heading text-sm font-bold text-ink">Learn Figma from Basic</h3>
            <div className="mt-2 flex items-center justify-between gap-2 font-body text-xs font-semibold">
              <span className="rounded-pill bg-pill px-2.5 py-1 text-ink">Beginner</span>
              <span className="text-blue">$25<span className="font-medium text-muted">/lifetime</span></span>
            </div>
          </FloatingCard>
          <FloatingCard className="absolute right-0 top-[27%] z-20 w-[160px] p-3 sm:right-[1%] sm:w-[185px] sm:p-4">
            <p className="font-body text-xs font-semibold text-muted">Learning Progress</p>
            <p className="mt-1 font-heading text-2xl font-bold text-ink">55%</p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-pill bg-pill" role="progressbar" aria-label="Learning progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="55">
              <div className="h-full w-[55%] rounded-pill bg-lime" />
            </div>
          </FloatingCard>
        </>
      )}
    </div>
  )
}

function GrowthSections() {
  return (
    <div className="relative isolate overflow-hidden bg-[#fbfcff]">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-lime/20 blur-[100px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-[40%] -z-10 h-96 w-96 rounded-full bg-blue/10 blur-[110px]" />

      <section aria-labelledby="professional-growth-heading" className="container mx-auto grid items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24">
        <div className="order-1">
          <h2 id="professional-growth-heading" className="max-w-[540px] font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-5 max-w-[560px] font-body text-base leading-7 text-muted">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>
          <div className="mt-8 grid max-w-[470px] grid-cols-3 gap-4">
            {growthStats.map((stat) => <StatBlock key={stat.label} value={stat.value} label={stat.label} />)}
          </div>
          <a className="mt-7 inline-flex items-center gap-2 font-body text-sm font-bold text-blue hover:underline" href="#courses">
            Explore courses <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
        <div className="order-2 min-w-0">
          <GrowthImagePanel kind="professional" />
        </div>
      </section>

      <section aria-labelledby="manage-courses-heading" className="container mx-auto grid items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24">
        <div className="order-1 lg:order-2">
          <h2 id="manage-courses-heading" className="max-w-[540px] font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Create &amp; Manage Courses Easily.
          </h2>
          <p className="mt-5 max-w-[550px] font-body text-base leading-7 text-muted">
            <strong className="font-bold text-ink">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
          </p>
          <CheckList items={growthChecklist} />
        </div>
        <div className="order-2 min-w-0 lg:order-1">
          <GrowthImagePanel kind="creator" />
        </div>
      </section>
    </div>
  )
}

export default GrowthSections