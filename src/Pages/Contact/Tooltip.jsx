import { Info } from "@material-ui/icons";

const Tooltip = () => {
	return (
		<span className="tooltip">
			<Info /> <span className="tooltiptext">tooltip text</span>
		</span>
	);
};

export default Tooltip;
