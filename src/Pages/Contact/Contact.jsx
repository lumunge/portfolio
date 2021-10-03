import { Typography, Button, Container, Grid, Card } from "@material-ui/core";
import Tooltip from "./Tooltip";
import QuoteButton from "./Quote";
import useStyles from "./styles";

const Contact = () => {
	const classes = useStyles();

	return (
		<Container className={classes.main}>
			<div className={classes.section}>
				<Typography className={classes.caption}>
					What's in your imagination
				</Typography>
				<Typography variant="h3">Lets talk about you</Typography>
				<Typography variant="h5">
					Have the next disruptive idea in mind or just want to chat,
					feel free to get i touch with me. Im that easy. Currently my
					time books quick so the sooner you write the better for both
					of us
				</Typography>
				<Typography  className={classes.caption}>
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
			<div className={classes.section}>
			<Typography className={classes.caption}>
					What i offer
				</Typography>
				<Typography variant="h4">Available Packages</Typography>
				<br />
				<Grid container spacing={2} className={classes.packages}>
					<Grid item xs={12} md={6} lg={3}>
						<Card className={classes.card}>
							<Typography className={classes.plan}>
								Basic
							</Typography>
							<hr className={classes.hr} />
							<Typography variant="h6">
								Interface Design
							</Typography>
							<Typography variant="h6">
								Frontend Development
							</Typography>
							<Typography variant="h6">
								Domain Services
							</Typography>
							<Typography variant="h6">
								Maintenance Agreement
							</Typography>
							<Typography variant="h6">SEO</Typography>
							<Typography
								variant="h6"
								className={classes.limited}
							>
								Analytics
							</Typography>
							<Typography
								variant="h6"
								className={classes.limited}
							>
								Backups
							</Typography>
							<Typography
								variant="h6"
								className={classes.limited}
							>
								Reviews
							</Typography>
							<Typography
								variant="h6"
								className={classes.limited}
							>
								Backend Development
							</Typography>
							<Typography
								variant="h6"
								className={classes.limited}
							>
								Live Chat
							</Typography>
							<Typography
								variant="h6"
								className={classes.limited}
							>
								E-commerce
							</Typography>
							<Typography
								variant="h6"
								className={classes.limited}
							>
								Content Management
							</Typography>
							<Typography
								variant="h6"
								className={classes.limited}
							>
								Email Setup
							</Typography>
							<Typography
								variant="h6"
								className={classes.limited}
							>
								Website Audits
							</Typography>
							<QuoteButton />
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3} className={classes.paper}>
						<Card className={classes.card}>
							<Typography>Business</Typography>
							<hr className={classes.hr} />
							<Typography variant="h6">
								Interface Design
							</Typography>
							<Typography variant="h6">
								Frontend Development
							</Typography>
							<Typography variant="h6">
								Backend Development
							</Typography>
							<Typography variant="h6">
								Domain Services
							</Typography>
							<Typography variant="h6">8 Reviews </Typography>
							<Typography variant="h6">
								6 Mth Maintenance
							</Typography>
							<Typography variant="h6">SEO</Typography>
							<Typography variant="h6">Analytics</Typography>
							<Typography variant="h6">Backups</Typography>
							<Typography
								variant="h6"
								className={classes.limited}
							>
								Live Chat
							</Typography>
							<Typography
								variant="h6"
								className={classes.limited}
							>
								E-commerce
							</Typography>
							<Typography
								variant="h6"
								className={classes.limited}
							>
								Content Management
							</Typography>
							<Typography
								variant="h6"
								className={classes.limited}
							>
								Email Setup
							</Typography>
							<Typography
								variant="h6"
								className={classes.limited}
							>
								Website Audits
							</Typography>
							<QuoteButton />
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3} className={classes.paper}>
						<Card className={classes.card}>
							<Typography>Enterprise</Typography>
							<hr className={classes.hr} />
							<Typography variant="h6">
								Interface Design
							</Typography>
							<Typography variant="h6">
								Frontend Development
							</Typography>
							<Typography variant="h6">
								Backend Development
							</Typography>
							<Typography variant="h6">
								Domain Services
							</Typography>
							<Typography variant="h6">18 Reviews</Typography>
							<Typography variant="h6">
								8 Mths Maintenance
							</Typography>
							<Typography variant="h6">SEO</Typography>
							<Typography variant="h6">Email Setup</Typography>
							<Typography variant="h6">Analytics</Typography>
							<Typography variant="h6">Backups</Typography>
							<Typography variant="h6">
								Content Management
							</Typography>
							<Typography
								variant="h6"
								className={classes.limited}
							>
								Live Chat
							</Typography>
							<Typography
								variant="h6"
								className={classes.limited}
							>
								E-commerce
							</Typography>
							<Typography
								variant="h6"
								className={classes.limited}
							>
								Website Audits
							</Typography>
							<QuoteButton />
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3} className={classes.paper}>
						<Card className={classes.card}>
							<Typography>Platinum</Typography>
							<hr className={classes.hr} />
							<Typography variant="h6">
								Interface Design
								<Tooltip text="Clean, modern design optimized for performance converting users to customers" />
							</Typography>
							<Typography variant="h6">
								Frontend Development
								<Tooltip text="html, css, javascript, jquery, css, apis, responsive design, cms, testing & debugging, cross-browser development" />
							</Typography>
							<Typography variant="h6">
								Backend Developement
								<Tooltip text="django, php, nodejs, databases(sql, mongodb, postgresql) session management, security, testing & debugging, apis, payment intergration" />
							</Typography>
							<Typography variant="h6">
								Domain Services
								<Tooltip text="Domain and Hosting configurations, database management, publishing " />
							</Typography>
							<Typography variant="h6">
								24 Reviews
								<Tooltip text="Functionality, improving the site, potential problems, usability" />
							</Typography>
							<Typography variant="h6">
								12 Mths Maintenance
								<Tooltip text="Domain name renewal, loadingspeed, security scans, 404 errors" />
							</Typography>
							<Typography variant="h6">
								SEO
								<Tooltip text="Optimization for search engines to increase traffic to the website" />
							</Typography>
							<Typography variant="h6">
								Live Chat
								<Tooltip text="Real time convenience for your customers and overall competitive advantage." />
							</Typography>
							<Typography variant="h6">
								E-commerce
								<Tooltip text="Intergration of ecommerce platforms, payment gateways, custom product templates and more" />
							</Typography>
							<Typography variant="h6">
								Analytics
								<Tooltip text="Get insights on who is browsing your site so you can male smarter business decisions" />
							</Typography>
							<Typography variant="h6">
								Backups
								<Tooltip text="Instant disaster recovery with automated backups." />
							</Typography>
							<Typography variant="h6">
								Content Management
								<Tooltip text="Create, store and manage content on the webpage" />
							</Typography>
							<Typography variant="h6">
								Email Setup
								<Tooltip text="Domain email accounts as per your domain name" />
							</Typography>
							<Typography variant="h6">
								Website Audits
								<Tooltip text="Analytics, ease of management, structural quality, security, usablility" />
							</Typography>
							<QuoteButton />
						</Card>
					</Grid>
				</Grid>
			</div>
			<div className={classes.section}>
				<Typography className={classes.caption}>How i work</Typography>
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
			<div className={`${classes.contact} ${classes.section}`}>
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
