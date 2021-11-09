import { Button } from "@material-ui/core";
import useStyles from "./styles.js";

const QuoteButton = () => {
	const classes = useStyles();

	return (
		<Button variant="contained" className={classes.quote}>
			<a
				href="https://forms.gle/tpUzNEhPSmHneKUo6"
				className={classes.link}
				target="_blank"
				rel="noreferrer"
			>
				Get Quote
			</a>{" "}
		</Button>
	);
};

export default QuoteButton;
