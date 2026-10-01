function AvatarStack({ images, badgeText, size = 40, className = '' }) {
  return (
    <div className={`flex items-center ${className}`} role="img" aria-label={`${badgeText || 'Learner'} community avatars`}>
      {images.map((image, index) => (
        <img
          key={`${image.src}-${index}`}
          className={`relative rounded-full border-[3px] border-white object-cover ${index > 0 ? '-ml-3' : ''}`}
          src={image.src}
          alt=""
          aria-hidden="true"
          decoding="async"
          height={size}
          loading="lazy"
          style={{ width: size, height: size, zIndex: images.length - index }}
          width={size}
        />
      ))}
      {badgeText && (
        <span
          className="relative -ml-2 inline-flex items-center justify-center rounded-pill border-[3px] border-white bg-lime px-2 font-body text-xs font-bold text-ink"
          style={{ height: size, minWidth: size }}
        >
          {badgeText}
        </span>
      )}
    </div>
  )
}

export default AvatarStack