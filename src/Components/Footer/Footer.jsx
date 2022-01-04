import {
	BottomNavigation,
	BottomNavigationAction,
	Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Code from "@material-ui/icons/Code";
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
						href="https://leetcode.com/lumunge/"
					>
						<BottomNavigationAction icon={<Code />} />
					</a>
				</div>
			</BottomNavigation>
			<div className={classes.footerDetails}>
				<Typography>Copyright @ <script>document.write(/\d{4}/.exec(Date())[0])</script> lumunge</Typography>
			</div>
		</div>
	);
};

export default Footer;
