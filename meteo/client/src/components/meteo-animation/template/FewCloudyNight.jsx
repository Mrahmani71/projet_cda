import AtomCloudMove from "../Atom/AtomCloudMove";
import AtomMoon from "../Atom/AtomMoon";

export default function FewCloudyNight() {
	return (
		<div className="icon">
				<AtomCloudMove zIndex="-1" top="20%" duration="3"/>
				<AtomCloudMove zIndex="3" top="45%" duration="4.5"/>

				<AtomMoon />
		</div>
	)
}
