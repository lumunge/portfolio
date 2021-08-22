import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	main: {
		paddingTop: "8rem",
		textAlign: "center",
	},
	packages: {
		display: "flex",
		justifyContent: "center",
		margin: "3rem 0",
	},
	paper: {
		margin: "0 10px",
		padding: "1rem 0",
	},
	limited: {
		textDecoration: "line-through",
	},
	contact: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		backgroundColor: "#f39c12",
		color: "#17202a",
		margin: "4rem 0",
		padding: "4rem 0",
	},
}));
