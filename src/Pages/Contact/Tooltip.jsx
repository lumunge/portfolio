import { Info } from "@material-ui/icons";

const Tooltip = ({text}) => {
	return (
		<span className="tooltip">
			<Info /> <span className="tooltiptext">{text}</span>
		</span>
	);
};

export default Tooltip;
