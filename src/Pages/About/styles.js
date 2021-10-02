import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	section1: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		"@media (min-width: 300px)": {
			display: "flex",
			flexDirection: "column-reverse",
			padding: "2rem",
		},
		"@media (min-width: 992px)": {
			display: "flex",
			flexDirection: "row",
		},
	},
	section2: {
		display: "flex",
		width: "100%",
		height: "100%",
		"@media (min-width: 300px)": {
			display: "flex",
			flexDirection: "column-reverse",
			padding: "2rem",
		},
		"@media (min-width: 992px)": {
			display: "flex",
			flexDirection: "row-reverse",
		},
	},
	intro: {
		height: "80vh",
		width: "100%",
		display: "flex",
		"@media (min-width: 300px)": {
			height: "100%",
			width: "100%",
			display: "flex",
			flexDirection: "column",
			padding: "2rem",
		},
		"@media (min-width: 992px)": {
			display: "flex",
			flexDirection: "row",
		},
	},
	meet: {
		width: "50%",
		"@media (min-width: 300px)": {
			width: "100%",
			marginRight: "1rem",
		},
	},
	imageContainer: {
		width: "50%",
		height: "550px",
		maxWidth: "500px",
		"@media (min-width: 300px)": {
			height: "400px",
			width: "100%",
			margin: "0 auto",
			marginTop: "2rem",
		},
	},
	image: {
		width: "100%",
		height: "100%",
	},
	about: {
		marginTop: "6rem",
	},
	story: {
		width: "50%",
		padding: "2rem 0",
		"@media (min-width: 300px)": {
			width: "100%",
			marginRight: "4rem",
		},
	},
	story2: {
		"@media (min-width: 300px)": {
			margin: 0,
		},
		"@media (min-width: 992px)": {
			marginLeft: "4rem",
		},
	},
	toolkit: {
		marginTop: "4rem",
		backgroundColor: "yellow",
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
