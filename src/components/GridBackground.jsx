const gridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
  backgroundSize: '96px 96px',
}

function GridBackground({ children, className = '', ...props }) {
  return (
    <div className={`relative isolate bg-blue ${className}`} style={gridStyle} {...props}>
      {children}
    </div>
  )
}

export default GridBackground