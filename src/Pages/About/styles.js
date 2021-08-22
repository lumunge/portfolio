import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	intro: {
		textAlign: "center",
	},
	image: {
		textAlign: "center",
		padding: "2rem 0",
	},
	about: {
		marginTop: "6rem",
	},
	story: {
		padding: "2rem 0",
	},
	principles: {
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		gridGap: "2rem",
		"@media (max-width: 780px)": {
			display: "grid",
			gridTemplateColumns: "repeat(1, 1fr)",
		},
	},
	paper: {
		padding: "2rem",
		textAlign: "center",
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
	text: {
		padding: "0 3rem",
	},
	button: {
		textTransform: "lowercase",
	},
	tool: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	iconText: {
		textTransform: "uppercase",
		color: "#f39c12",
	},
	icon: {
		fontSize: "3rem",
		"&:hover": {
			color: "#f39c12",
			transition: "all .4s ease-in-out",
			cursor: "pointer",
		},
	},
}));
