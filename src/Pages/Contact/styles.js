import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	main: {
		paddingTop: "8rem",
		textAlign: "center",
	},
	// packages: {
	// 	display: "flex",
	// 	justifyContent: "center",
	// 	margin: "3rem 0",
	// },
	card: {
		// margin: "0 10px",
		// padding: "2rem 1rem",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		// backgroundColor: "#fff",
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
	quote: {
		marginTop: "1.5rem",
		textDecoration: "none",
		color: "#333",
	},
	button: {
		marginTop: "1rem",
	},
	link: {
		textDecoration: "none",
		color: "#333",
	},
	hr: {
		width: "40%",
		height: "2px",
		backgroundColor: "#f39c12",
		border: "none",
	},
}));
