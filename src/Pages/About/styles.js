import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	section: {
		marginTop: "1rem",
	},
	intro: {
		height: "80vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
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
		paddingTop: "1rem",
	},
	icon: {
		width: "60px",
		height: "60px",
		"&:hover": {
			color: "#f39c12",
			transition: "all .4s ease-in-out",
			cursor: "pointer",
		},
	},
	iconImg: {
		height: "100%",
		width: "100%",
		// borderRadius: "50%",
	},
	reachOut: {
		color: "#fff",
	},
	link: {
		textDecoration: "none",
		color: "#333",
	},
	caption: {
		color: "#f39c12",
		paddingBottom: "1rem",
	},
}));
