import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	container: {
		margin: "7rem 3rem",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		"@media (max-width: 780px)": {
			margin: 0,
		},
	},
	heading: {
		textAlign: "center",
	},
	paper: {
		display: "flex",
		margin: "2rem 0",
		width: "100%",
		height: "350px",
		"@media (max-width: 780px)": {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			height: "100%",
			paddingBottom: "2rem",
		},
	},
	details: {
		padding: "2rem 2rem 0 4rem",
		width: "50%",
		"@media (max-width: 780px)": {
			padding: "1rem",
			width: "100%",
		},
	},
	imgContainer: {
		width: "50%",
		height: "100%",
		"@media (max-width: 780px)": {
			width: "100%",
		},
	},
	projectImage: {
		height: "100%",
		width: "100%",
		objectFit: "contain",
		"@media (max-width: 780px)": {
			width: "100%",
		},
	},
	link: {
		textDecoration: "none",
		color: "#333",
	},
}));
