import AtomCloudMove from "../Atom/AtomCloudMove";
import AtomRays from "../Atom/AtomRays";
import AtomSun from "../Atom/AtomSun";

export default function FewCloudy() {
	return (
		<div className="icon">
				<AtomCloudMove zIndex="-1" top="20%" duration="3"/>
				<AtomCloudMove zIndex="3" top="45%" duration="4.5"/>

				<AtomSun> 
					<AtomRays/>
				</AtomSun>
		</div>
	)
}
