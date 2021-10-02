import { Typography, Button, Container, Paper } from "@material-ui/core";
import useStyles from "./styles";

const Contact = () => {
	const classes = useStyles();

	return (
		<Container className={classes.main}>
			<div>
				<Typography variant="caption">
					What's in your imagination
				</Typography>
				<Typography variant="h3">Lets talk about you</Typography>
				<Typography variant="h5">
					Have the next disruptive idea in mind or just want to chat,
					feel free to get i touch with me. Im that easy. Currently my
					time books quick so the sooner you write the better for both
					of us
				</Typography>
				<Typography variant="caption">
					Reply within 2 working days
				</Typography>
				<br />
				<Button className={classes.button} variant="contained">
					<a
						href="https://forms.gle/tpUzNEhPSmHneKUo6"
						className={classes.link}
						target="_blank"
						rel="noreferrer"
					>
						Let's Talk
					</a>
				</Button>
			</div>
			<div>
				<Typography variant="h4">Available Packages</Typography>
				<div className={classes.packages}>
					<Paper elevation={3} className={classes.paper}>
						<Typography>Basic</Typography>
						<Typography variant="h6">Interface Design</Typography>
						<Typography variant="h6">
							Frontend Development
						</Typography>

						<Typography variant="h6">Web Hosting</Typography>
						<Typography variant="h6">Domain Services</Typography>
						<Typography variant="h6">
							Maintenance Agreement
						</Typography>
						<Typography variant="h6">
							Search Engine Optimization
						</Typography>
						<Typography variant="h6" className={classes.limited}>
							Analytics
						</Typography>
						<Typography variant="h6" className={classes.limited}>
							Backups
						</Typography>
						<Typography variant="h6" className={classes.limited}>
							Review Rounds
						</Typography>
						<Typography variant="h6" className={classes.limited}>
							Backend Development
						</Typography>
						<Typography variant="h6" className={classes.limited}>
							Live Chat
						</Typography>
						<Typography variant="h6" className={classes.limited}>
							Content Management
						</Typography>
						<Typography variant="h6" className={classes.limited}>
							Email Setup
						</Typography>
						<Typography variant="h6" className={classes.limited}>
							Website Audits
						</Typography>
						<Button variant="contained">Get Quote</Button>
					</Paper>
					<Paper elevation={3} className={classes.paper}>
						<Typography>Business</Typography>
						<Typography variant="h6">Interface Design</Typography>
						<Typography variant="h6">
							Frontend Development
						</Typography>
						<Typography variant="h6">
							Backend Development
						</Typography>
						<Typography variant="h6">Web Hosting</Typography>
						<Typography variant="h6">Domain Services</Typography>
						<Typography variant="h6">8 Review Rounds</Typography>
						<Typography variant="h6">
							6 Months Maintenance Services
						</Typography>
						<Typography variant="h6">
							Search Engine Optimization
						</Typography>
						<Typography variant="h6">Analytics</Typography>
						<Typography variant="h6">Backups</Typography>
						<Typography variant="h6" className={classes.limited}>
							Live Chat
						</Typography>
						<Typography variant="h6" className={classes.limited}>
							Content Management
						</Typography>
						<Typography variant="h6" className={classes.limited}>
							Email Setup
						</Typography>
						<Typography variant="h6" className={classes.limited}>
							Website Audits
						</Typography>
						<Button variant="contained">Get Quote</Button>
					</Paper>
					<Paper elevation={3} className={classes.paper}>
						<Typography>Enterprise</Typography>
						<Typography variant="h6">Interface Design</Typography>
						<Typography variant="h6">
							Frontend Development
						</Typography>
						<Typography variant="h6">
							Backend Development
						</Typography>
						<Typography variant="h6">Web Hosting</Typography>
						<Typography variant="h6">Domain Services</Typography>
						<Typography variant="h6">18 Review Rounds</Typography>
						<Typography variant="h6">
							8 Months Maintenance Services
						</Typography>
						<Typography variant="h6">
							Search Engine Optimization
						</Typography>
						<Typography variant="h6">Email Setup</Typography>
						<Typography variant="h6">Analytics</Typography>
						<Typography variant="h6">Backups</Typography>
						<Typography variant="h6">Content Management</Typography>
						<Typography variant="h6" className={classes.limited}>
							Live Chat
						</Typography>
						<Typography variant="h6" className={classes.limited}>
							Website Audits
						</Typography>
						<Button variant="contained">Get Quote</Button>
					</Paper>
					<Paper elevation={3} className={classes.paper}>
						<Typography>Platinum</Typography>
						<Typography variant="h6">Interface Design</Typography>
						<Typography variant="h6">
							Frontend Development
						</Typography>
						<Typography variant="h6">
							Backend Developement
						</Typography>
						<Typography variant="h6">Web Hosting</Typography>
						<Typography variant="h6">Domain Services</Typography>
						<Typography variant="h6">24 Review Rounds</Typography>
						<Typography variant="h6">
							12 Months Maintenance Services
						</Typography>
						<Typography variant="h6">
							Search Engine Optimization
						</Typography>
						<Typography variant="h6">Live Chat</Typography>
						<Typography variant="h6">Analytics</Typography>
						<Typography variant="h6">Backups</Typography>
						<Typography variant="h6">Content Management</Typography>
						<Typography variant="h6">Email Setup</Typography>
						<Typography variant="h6">Website Audits</Typography>
						<Button variant="contained">Get Quote</Button>
					</Paper>
				</div>
			</div>
			<div>
				<Typography variant="caption">How i work</Typography>
				<Typography variant="h3">Assured Profit</Typography>
				<Typography variant="h6">
					As a developer with a business mindset, I am always focusing
					on creating expreiences which are delightful to your users
					and profitable to your business. I start every project with
					detailed questions about your business and customers before
					i dive into solutions. I work with selected clients at a
					time in order to ensure high quality and meaningful results.
					If i feel it wont work for you i will tell you and recommend
					other viable solutions. I only accept project which i
					believe i can create the maximum value to the business and
					impact to your users and i assure you, the results are
					better than the money you will spend.
				</Typography>
			</div>
			<div className={classes.contact}>
				<Typography className={classes.contactTitle} variant="h4">
					Have an Idea In Mind?
				</Typography>
				<Button variant="contained" className={classes.button}>
					<a
						href="https://forms.gle/tpUzNEhPSmHneKUo6"
						className={classes.link}
						target="_blank"
						rel="noreferrer"
					>
						Reach Out{" "}
					</a>
				</Button>
			</div>
		</Container>
	);
};

export default Contact;
