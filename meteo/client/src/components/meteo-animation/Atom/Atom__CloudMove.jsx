import cb from 'classnames'
import "../style.css"

export default function Atom__CloudMove({zIndex, top, duration}) {
  const atom__style = {
    zIndex: zIndex,
    top : top,
    animationDuration: `${duration}s`,
  }
  return (
    <div className={cb('atom__cloudmove')} style={atom__style}></div>
  )
}
