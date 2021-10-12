import {
	BottomNavigation,
	BottomNavigationAction,
	Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import useStyles from "./styles";

const Footer = () => {
	const classes = useStyles();

	return (
		<div className={classes.footer}>
			<BottomNavigation>
				<div className={classes.socials}>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/lumunge"
					>
						<BottomNavigationAction icon={<GitHubIcon />} />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/lumunge/"
					>
						<BottomNavigationAction icon={<LinkedInIcon />} />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="lumungep12@gmail.com"
					>
						<BottomNavigationAction icon={<MailIcon />} />
					</a>
				</div>
			</BottomNavigation>
			<div className={classes.footerDetails}>
				<Typography>all rights reserved @2021 lumunge</Typography>
			</div>
		</div>
	);
};

export default Footer;
