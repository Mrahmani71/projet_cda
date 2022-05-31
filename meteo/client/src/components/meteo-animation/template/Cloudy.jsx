import AtomCloud from "../Atom/AtomCloud";
import AtomCloudMove from "../Atom/AtomCloudMove";

export default function Cloudy() {
	return (
		<div className="icon">
				<AtomCloudMove zIndex="-1" top="20%" duration="3"/>
				<AtomCloudMove zIndex="3" top="45%" duration="4.5"/>
				<AtomCloud/>
		</div>
	)
}
