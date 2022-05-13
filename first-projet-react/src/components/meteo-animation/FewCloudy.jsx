import cb from "classnames"
import "./styleAnim.css"

export default function FewCloudy() {
	return (
			<div className={cb("iconss", "few_cloudy")}>
				<div className="sunss">
					<div className="raysss"></div>
				</div>
				<div className="cloudies"></div>
				<div className="cloudies"></div>
				<div className="cloudies"></div>
			</div>
	)
}
