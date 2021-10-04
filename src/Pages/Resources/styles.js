import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
	container: {
		margin: "7rem 3rem",
		height: "100%",
	},
	paper: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		padding: "2rem",
	},
	link: {
		textDecoration: "none",
		color: "#333",
		padding: "5px 0",
		"&:hover": {
			color: "#f39c12",
			transition: "all .5s ease-in-out",
		},
	},
}));
