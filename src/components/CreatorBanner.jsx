import { Link } from 'react-router-dom'
import GridBackground from './GridBackground.jsx'
import limeSquiggle from '../assets/Frame.svg'
import whiteSquiggle from '../assets/Frame02.svg'
import smallLimeSquiggle from '../assets/Frame05.svg'
import limeCone from '../assets/Cone01.svg'
import whiteCylinder from '../assets/square_white.svg'
import limeTorus from '../assets/Frame04.svg'
import whiteCone from '../assets/Cone_white.svg'

function CreatorBanner() {
  return (
    <section id="creators" aria-labelledby="creator-banner-heading" className="scroll-mt-4 py-12 sm:py-16 lg:py-20">
      <GridBackground className="relative isolate flex min-h-[440px] items-center justify-center overflow-hidden px-6 py-16 text-center text-white sm:min-h-[480px] sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
          <img src={limeSquiggle} alt="" className="absolute left-[1%] top-[6%] h-16 w-16 rotate-[-16deg] object-contain sm:left-[7%] sm:top-[8%] sm:h-28 sm:w-20" width="267" height="387" />
          <img src={smallLimeSquiggle} alt="" className="absolute left-[4%] top-[18%] hidden h-12 w-20 rotate-[12deg] object-contain sm:left-[11%] sm:top-[19%] sm:block" width="334" height="199" />
          <img src={whiteSquiggle} alt="" className="absolute left-[4%] top-[18%] hidden h-12 w-20 rotate-[12deg] object-contain sm:left-[11%] sm:top-[19%] sm:block" width="317" height="332" />
          <img src={limeCone} alt="" className="absolute right-[1%] top-[6%] h-16 w-16 rotate-[12deg] object-contain sm:right-[8%] sm:top-[8%] sm:h-24 sm:w-24" width="190" height="189" />
          <img src={whiteCylinder} alt="" className="absolute right-[8%] top-[26%] hidden h-16 w-16 rotate-[-12deg] object-contain sm:right-[15%] sm:top-[20%] sm:block sm:h-20 sm:w-20" width="218" height="372" />
          <img src={limeTorus} alt="" className="absolute bottom-[3%] right-[3%] h-20 w-20 rotate-[-14deg] object-contain sm:bottom-[7%] sm:right-[8%] sm:h-28 sm:w-28" width="217" height="216" />
          <img src={whiteCone} alt="" className="absolute bottom-[5%] left-[2%] h-16 w-16 rotate-[-12deg] object-contain sm:bottom-[8%] sm:left-[8%] sm:h-24 sm:w-24" width="140" height="189" />
        </div>

        <div className="relative z-10 mx-auto max-w-[700px]">
          <h2 id="creator-banner-heading" className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[44px]">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] font-body text-base leading-7 text-white/85">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <Link
            to="/signup"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-pill bg-lime px-7 font-body text-base font-bold text-ink transition-colors duration-200 hover:bg-[#b7e600] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-[0.98]"
          >
            Join as Creator
          </Link>
        </div>
      </GridBackground>
    </section>
  )
}

export default CreatorBanner