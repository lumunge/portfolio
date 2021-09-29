import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	navBar: {
		backgroundColor: "#17202a",
		padding: "10px 0",
	},
	logo: {
		color: "#fff",
		textDecoration: "none",
		"&:hover": {
			color: "#f39c12",
			transition: "all .5s ease-in-out",
		},
	},
	navLinks: {
		color: "#fff",
		textTransform: "capitalize",
		"&:hover": {
			color: "#f39c12",
			transition: "all .5s ease-in-out",
		},
	},
	toolBar: {
		display: "flex",
		justifyContent: "space-evenly",
		"@media (max-width: 780px)": {
			display: "none",
		},
	},
	responsive: {
		display: "none",
		"@media (max-width: 780px)": {
			display: "flex",
			justifyContent: "space-around",
		},
	},
	menu: {
		background: "#17202a",
	},
}));
