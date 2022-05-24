import Atom__CloudMove from "../Atom/Atom__CloudMove"
import Atom__Moon from "../Atom/Atom__Moon"

export default function FewCloudyNight() {
	return (
		<div className="icon">
				<Atom__CloudMove zIndex="-1" top="20%" duration="3"/>
				<Atom__CloudMove zIndex="3" top="45%" duration="4.5"/>

				<Atom__Moon />
		</div>
	)
}
