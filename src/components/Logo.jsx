import logoMark from '../assets/logo.svg'
import lightWordmark from '../assets/ByteSpace.svg'
import darkWordmark from '../assets/ByteSpace_black.svg'

function Logo({ variant = 'dark', className = '' }) {
  const wordmark = variant === 'light' ? lightWordmark : darkWordmark

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`} role="img" aria-label="ByteSpace">
      <img className="logo-mark h-[31.5px] w-[28.88px] shrink-0" src={logoMark} alt="" width="29" height="32" />
      <img className="logo-wordmark h-auto w-[100px]" src={wordmark} alt="" width="133" height="21" />
    </span>
  )
}

export default Logo