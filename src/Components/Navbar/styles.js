import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	navBar: {
		backgroundColor: "#17202a",
		padding: "10px 0",
	},
	navLinks: {
		color: "#fff",
		textTransform: "capitalize",
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
