import Atom__CloudMove from "../Atom/Atom__CloudMove"
import Atom__Rays from "../Atom/Atom__Rays"
import Atom__Sun from "../Atom/Atom__Sun"


export default function FewCloudy() {
	return (
		<div className="icon">
				<Atom__CloudMove zIndex="-1" top="20%" duration="3"/>
				<Atom__CloudMove zIndex="3" top="45%" duration="4.5"/>

				<Atom__Sun> 
					<Atom__Rays/>
				</Atom__Sun>
		</div>
	)
}
