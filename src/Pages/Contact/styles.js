import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	main: {
		paddingTop: "5rem",
		height: "100%",
		width: "100%",
		"@media (max-width: 780px)": {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			textAlign: "center",
			overflowX: "hidden",
			margin: 0,
			padding: 0,
			height: "100%",
			width: "100%",
		},
	},
	header: {
		padding: "0 0 2rem 0",
	},
	section: {
		padding: "2rem 0",
	},
	headings: {
		color: "#f39c12",
	},
	card: {
		padding: "2rem 1rem",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	limited: {
		textDecoration: "line-through",
		color: "#707b7c",
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
		backgroundColor: "#f39c12",
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
		margin: "10px 0",
	},
	caption: {
		color: "#f39c12",
		paddingBlock: "10px",
	},
}));
