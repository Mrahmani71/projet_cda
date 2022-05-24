import Atom__Cloud from "../Atom/Atom__Cloud"
import Atom__CloudMove from "../Atom/Atom__CloudMove"

export default function Cloudy() {
	return (
		<div className="icon">
				<Atom__CloudMove zIndex="-1" top="20%" duration="3"/>
				<Atom__CloudMove zIndex="3" top="45%" duration="4.5"/>
				<Atom__Cloud />
		</div>
	)
}
