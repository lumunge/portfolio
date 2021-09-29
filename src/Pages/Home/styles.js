import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	intro: {
		display: "flex",
		alignItems: "center",
		margin: "7rem 0 2rem 0",
		height: "70vh",
		"@media (max-width: 780px)": {
			marginTop: "8rem",
		},
	},
	title: {
		textAlign: "center",
		color: "#f39c12",
		"@media (max-width: 780px)": {
			fontSize: "2rem",
		},
	},
	about: {
		lineHeight: "3rem",
	},
	profileImg: {
		borderRadius: "10%",
		"@media (max-width: 780px)": {
			display: "none",
		},
	},
	highlights: {
		backgroundColor: "#f39c12",
		padding: "5px",
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
		padding: "2rem 0 0 4rem",
		width: "50%",
		"@media (max-width: 780px)": {
			padding: "1rem",
			width: "100%",
		},
	},
	imgContainer: {
		width: "50%",
		height: "350px",
		"@media (max-width: 780px)": {
			width: "100%",
		},
	},
	projectImage: {
		height: "100%",
		width: "100%",
		"@media (max-width: 780px)": {
			width: "100%",
		},
	},
	cta: {
		display: "flex",
		justifyContent: "space-between",
		padding: "2rem 0",
		width: "100%",
		"@media (max-width: 780px)": {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
	},
	cta1: {
		width: "50%",
		"@media (max-width: 780px)": {
			width: "100%",
		},
	},
	cta2: {
		width: "50%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		"@media (max-width: 780px)": {
			padding: "2rem 0",
			width: "70%",
		},
	},
	start: {
		marginRight: "2rem",
	},
	contact: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		height: "20vh",
		backgroundColor: "#f39c12",
		color: "#17202a",
		marginBottom: "4rem",
	},
	process: {
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		gridGap: "1.5rem",
		padding: "2rem 0",
		"@media (max-width: 780px)": {
			display: "grid",
			gridTemplateColumns: "repeat(1, 1fr)",
		},
	},
	more: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		padding: "2rem 0",
	},
	link: {
		textDecoration: "none",
		color: "#333",
	},
}));
