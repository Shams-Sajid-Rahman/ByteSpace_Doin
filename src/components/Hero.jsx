import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import AvatarStack from './AvatarStack.jsx'
import FloatingCard from './FloatingCard.jsx'
import GridBackground from './GridBackground.jsx'
import Navbar from './Navbar.jsx'
import limeSquiggle from '../assets/Frame.svg'
import smallLimeSquiggle from '../assets/Frame05.svg'
import whiteSquiggle from '../assets/Frame02.svg'
import whiteTorus from '../assets/circle.svg'
import whiteCone from '../assets/Cone_white.svg'
import limeCylinder from '../assets/Cone01.svg'
import { avatarImages, heroImages } from '../data/showcaseImages.js'

function Hero() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  function handleSearch(event) {
    event.preventDefault()
    const query = searchTerm.trim()
    navigate({ pathname: '/', search: query ? `?q=${encodeURIComponent(query)}` : '', hash: '#courses' })
  }

  return (
    <section aria-labelledby="hero-heading" className="relative">
      <GridBackground className="relative isolate min-h-[790px] overflow-hidden text-white sm:min-h-[820px] lg:min-h-[900px]">
        <Navbar />

        <div className="relative z-20 mx-auto max-w-container px-2 pt-8 text-center sm:px-6 sm:pt-12 lg:pt-14">
          <h1
            id="hero-heading"
            className="mx-auto w-full max-w-[900px] font-heading text-[22px] font-bold leading-[1.16] text-white min-[360px]:text-[28px] min-[480px]:text-[36px] sm:text-[46px] md:text-5xl lg:text-[52px] xl:text-[64px]"
          >
            Get Access to Hundreds
            <br className="sm:hidden" />
            <br className="hidden sm:block" />
            {' '}Courses Available
          </h1>
          <p className="mx-auto mt-5 max-w-[670px] font-body text-base font-medium leading-7 text-white/85 sm:mt-6">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
          <form
            className="mx-auto mt-7 flex w-full max-w-[560px] flex-col gap-3 sm:mt-8 sm:flex-row sm:rounded-pill sm:bg-white sm:p-1.5"
            role="search"
            onSubmit={handleSearch}
          >
            <label className="flex min-h-[54px] flex-1 items-center gap-3 rounded-pill bg-white px-5 text-ink sm:bg-transparent">
              <Search aria-hidden="true" className="shrink-0 text-muted" size={19} strokeWidth={2} />
              <input
                aria-label="Search courses, topics, or creators"
                className="min-w-0 flex-1 bg-transparent font-body text-sm font-medium text-ink outline-none placeholder:text-muted focus-visible:outline-none"
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Course, topic, creator"
                type="search"
                value={searchTerm}
              />
            </label>
            <button
              className="min-h-[54px] shrink-0 rounded-pill bg-lime px-8 font-body text-sm font-bold text-ink transition-colors hover:bg-[#b7e600] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
          <img src={limeSquiggle} alt="" className="absolute left-[-5%] top-[49%] h-20 w-16 rotate-[-12deg] object-contain min-[640px]:left-[1%] min-[640px]:top-[44%] min-[640px]:h-28 min-[640px]:w-20 lg:left-[6%] lg:top-[32%] lg:h-48 lg:w-28" width="267" height="387" />
          <img src={smallLimeSquiggle} alt="" className="absolute left-[2%] top-[68%] h-12 w-16 rotate-[-12deg] object-contain sm:left-[4%] sm:top-[63%] sm:h-16 sm:w-20 lg:left-[11%] lg:top-[46%] lg:h-20 lg:w-28" width="334" height="199" />
          <img src={whiteSquiggle} alt="" className="absolute left-[12%] top-[76%] h-12 w-14 rotate-[18deg] object-contain min-[640px]:left-[10%] min-[640px]:top-[71%] min-[640px]:h-16 min-[640px]:w-16 lg:left-[15%] lg:top-[54%] lg:h-20 lg:w-20" width="317" height="332" />
          <img src={limeCylinder} alt="" className="absolute right-[-3%] top-[68%] h-16 w-16 rotate-[14deg] object-contain min-[640px]:right-[3%] min-[640px]:top-[63%] min-[640px]:h-20 min-[640px]:w-20 lg:right-[8%] lg:top-[36%] lg:h-28 lg:w-28" width="190" height="189" />
          <img src={whiteCone} alt="" className="absolute right-[2%] top-[79%] h-16 w-12 rotate-[10deg] object-contain min-[640px]:right-[5%] min-[640px]:top-[75%] min-[640px]:h-20 min-[640px]:w-16 lg:right-[12%] lg:top-[60%] lg:h-28 lg:w-20" width="140" height="189" />
          <img src={whiteSquiggle} alt="" className="absolute bottom-[8%] right-[2%] h-16 w-20 rotate-[-18deg] object-contain sm:right-[10%] sm:h-24 sm:w-28 lg:right-[17%]" width="317" height="332" />
          <img src={whiteTorus} alt="" className="absolute bottom-[5%] left-[1%] h-20 w-20 rotate-[-18deg] object-contain sm:left-[7%] sm:h-28 sm:w-28 lg:left-[12%]" width="346" height="343" />
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute bottom-[-285px] left-1/2 z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-lime sm:bottom-[-340px] sm:h-[670px] sm:w-[670px] lg:bottom-[-365px] lg:h-[760px] lg:w-[760px]" />
        <img
          className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[315px] w-[440px] -translate-x-1/2 object-contain sm:h-[390px] sm:w-[546px] lg:h-[455px] lg:w-[642px]"
          decoding="async"
          fetchPriority="high"
          height="515"
          src={heroImages[0].src}
          alt="Smiling man wearing headphones and holding a tablet"
          width="722"
        />

        <FloatingCard className="absolute left-[10%] top-[53%] z-20 hidden w-[230px] lg:block">
          <p className="font-heading text-base font-bold">UI/UX Design</p>
          <p className="mt-1 font-body text-xs font-medium text-muted">200 Courses • 1000+ Students</p>
        </FloatingCard>

        <FloatingCard className="absolute right-[10%] top-[53%] z-20 hidden w-[220px] lg:block">
          <p className="font-body text-sm font-semibold text-muted">Learning Progress</p>
          <p className="mt-1 font-heading text-3xl font-bold text-ink">55%</p>
          <div className="mt-3 h-2 overflow-hidden rounded-pill bg-pill" role="progressbar" aria-label="Learning progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="55">
            <div className="h-full w-[55%] rounded-pill bg-lime" />
          </div>
        </FloatingCard>

        <FloatingCard className="absolute bottom-[9%] left-[12%] z-20 hidden w-[250px] lg:block">
          <p className="font-heading text-base font-bold">Happy Students</p>
          <p className="mt-1 font-body text-sm font-semibold text-muted">4.5 (240) <span className="text-[#805700]">★</span></p>
          <AvatarStack className="mt-3" images={avatarImages} badgeText="2K+" size={34} />
        </FloatingCard>
      </GridBackground>
    </section>
  )
}

export default Hero