import cb from 'classnames'
import "../style.css"

export default function AtomCloudMove({zIndex, top, duration}) {
  const atom_style = {
    zIndex: zIndex,
    top : top,
    animationDuration: `${duration}s`,
  }
  return (
    <div className={cb('atom_cloudmove')} style={atom_style}></div>
  )
}
