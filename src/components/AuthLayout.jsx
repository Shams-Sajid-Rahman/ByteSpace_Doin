import { Link } from 'react-router-dom'
import limeCone from '../assets/Cone01.svg'
import limeSquiggle from '../assets/Frame05.svg'
import whiteTorus from '../assets/circle.svg'
import GridBackground from './GridBackground.jsx'
import Logo from './Logo.jsx'

function AuthLayout({ children, title, description }) {
  return (
    <main className="grid min-h-screen bg-white md:grid-cols-2">
      <GridBackground className="relative hidden min-h-screen overflow-hidden px-8 py-10 text-white md:flex md:flex-col md:justify-between lg:px-14 lg:py-12">
        <Link to="/" aria-label="ByteSpace home" className="relative z-10 w-fit">
          <Logo variant="light" />
        </Link>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <img src={limeSquiggle} alt="" className="absolute left-[8%] top-[35%] h-24 w-36 rotate-[-14deg] object-contain" width="334" height="199" />
          <img src={whiteTorus} alt="" className="absolute right-[8%] top-[22%] h-28 w-28 rotate-[12deg] object-contain" width="346" height="343" />
          <img src={limeCone} alt="" className="absolute bottom-[18%] right-[15%] h-28 w-28 rotate-[-12deg] object-contain" width="190" height="189" />
        </div>
        <div className="relative z-10 mb-10 max-w-[430px] lg:mb-16">
          <p className="font-heading text-4xl font-bold leading-tight lg:text-5xl">Learn boldly. Create freely.</p>
          <p className="mt-4 font-body text-base leading-7 text-white/80">A place to grow your skills, share what you know, and build what comes next.</p>
        </div>
        <p className="relative z-10 font-body text-xs font-medium text-white/60">{title} · {description}</p>
      </GridBackground>

      <div className="flex min-h-screen min-w-0 flex-col">
        <div className="flex min-h-[68px] items-center bg-blue px-5 md:hidden">
          <Link to="/" aria-label="ByteSpace home"><Logo variant="light" className="[&_.logo-mark]:h-8 [&_.logo-mark]:w-[29px] [&_.logo-wordmark]:w-[88px]" /></Link>
        </div>
        <div className="flex flex-1 items-center justify-center px-6 py-10 sm:px-10 md:px-8 lg:px-14">
          <div className="w-full max-w-[440px]">{children}</div>
        </div>
      </div>
    </main>
  )
}

export default AuthLayout