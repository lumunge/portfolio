import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	mainContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	intro: {
		display: "flex",
		alignItems: "center",
		height: "100vh",
		width: "100%",
		"@media (min-width: 300px)": {
			margin: "3rem 0",
			width: "100%",
			height: "100%",
			display: "flex",
			flexDirection: "column-reverse",
			justifyContent: "center",
		},
		// "@media (min-width: 768px)": {
		// },
		"@media (min-width: 992px)": {
			margin: "3rem 0",
			width: "100%",
			height: "100%",
			display: "flex",
			flexDirection: "row",
		},
		// "@media (min-width: 1200px)": {
		// },
	},
	introInfo: {
		width: "50%",
		paddingRight: "3rem",
		"@media (min-width: 300px)": {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
			width: "100%",
			padding: 0,
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
	profile: {
		width: "50%",
		height: "600px",
		padding: "4rem 2rem",
		"@media (min-width: 300px)": {
			width: "100%",
			height: "500px",
			marginBottom: "3rem",
		},
		"@media (min-width: 768px)": {
			width: "100%",
			height: "100%",
		},
	},
	profileImg: {
		width: "100%",
		height: "100%",
		borderRadius: "50%",
		objectFit: "cover",
		"@media (min-width: 300px)": {
			objectFit: "cover",
			width: "100%",
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
		objectFit: "contain",
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
		},
	},
	cta1: {
		width: "50%",
		"@media (max-width: 780px)": {
			width: "100%",
			textAlign: "center",
		},
	},
	cta2: {
		width: "50%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		"@media (max-width: 780px)": {
			padding: "2rem 0",
			width: "100%",
			display: "flex",
			alignItems: "center",
		},
	},
	h2: {
		"@media (max-width: 780px)": {
			fontSize: "3rem",
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
		width: "100%",
		"@media (max-width: 780px)": {
			textAlign: "center",
			fontSize: "4rem",
		},
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
	caption: {
		color: "#f39c12",
		paddingBottom: "1rem",
	},
}));
