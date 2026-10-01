import partnerWordmarks from '../assets/Logo_Logoipsum.svg'

function PartnerLogos() {
  return (
    <section aria-label="ByteSpace community partners" className="bg-[#f4f4f6] py-8 sm:py-10">
      <div className="container mx-auto px-6">
        <img className="mx-auto h-auto w-full max-w-[1132px]" src={partnerWordmarks} alt="Partner logos" width="1132" height="42" />
      </div>
    </section>
  )
}

export default PartnerLogos