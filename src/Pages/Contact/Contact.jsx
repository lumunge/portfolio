import { useState } from "react";
import {
	Typography,
	Button,
	Container,
	Grid,
	Card,
	Tooltip,
} from "@material-ui/core";
import Info from "@material-ui/icons/Info";
import QuoteButton from "./Quote";
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./styles";

const Contact = () => {
	const classes = useStyles();

	const [showTooltip, setShowToolTip] = useState(false);

	const PlanTip = withStyles({
		tooltip: {
			color: "#f39c12",
			backgroundColor: "#000",
			fontSize: "20px",
		},
	})(Tooltip);

	return (
		<Container className={classes.main}>
			<div className={classes.section}>
				<Typography className={classes.caption}>
					What's in your imagination
				</Typography>
				<Typography variant="h3">Lets talk about you</Typography>
				<Typography variant="h5">
					Have the next disruptive idea in mind or just want to chat,
					feel free to get in touch with me. Im that easy. Currently my
					time books quick so the sooner you write the better for both
					of us
				</Typography>
				<Typography className={classes.caption}>
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
								<PlanTip
									title="Clean, modern design optimized for performance converting users to customers."
									placement="top"
									arrow
								>
									<Info className={classes.info} />
								</PlanTip>
							</Typography>
							<Typography variant="h6">
								Frontend Development
								<PlanTip
									title="html, css, javascript, jquery, css, apis, responsive design, cms, testing & debugging, cross-browser development."
									placement="top"
									arrow
								>
									<Info className={classes.info} />
								</PlanTip>
							</Typography>
							<Typography variant="h6">
								Backend Developement
								<PlanTip
									title="django, php, nodejs, databases(sql, mongodb, postgresql) session management, security, testing & debugging, apis, payment intergration."
									placement="top"
									arrow
								>
									<Info className={classes.info} />
								</PlanTip>
							</Typography>
							<Typography variant="h6">
								Domain Services
								<PlanTip
									title="Domain and Hosting configurations, database management, publishing."
									placement="top"
									arrow
								>
									<Info className={classes.info} />
								</PlanTip>
							</Typography>
							<Typography variant="h6">
								24 Reviews
								<PlanTip
									title="Functionality, improving the site, potential problems, usability."
									placement="top"
									arrow
								>
									<Info className={classes.info} />
								</PlanTip>
							</Typography>
							<Typography variant="h6">
								12 Mths Maintenance
								<PlanTip
									title="Domain name renewal, loadingspeed, security scans, 404 errors."
									placement="top"
									arrow
								>
									<Info className={classes.info} />
								</PlanTip>
							</Typography>
							<Typography variant="h6">
								SEO
								<PlanTip
									title="Optimization for search engines to increase traffic to the website."
									placement="top"
									arrow
								>
									<Info className={classes.info} />
								</PlanTip>
							</Typography>
							<Typography variant="h6">
								Live Chat
								<PlanTip
									title="Real time convenience for your customers and overall competitive advantage."
									placement="top"
									arrow
								>
									<Info className={classes.info} />
								</PlanTip>
							</Typography>
							<Typography variant="h6">
								E-commerce
								<PlanTip
									title="Intergration of ecommerce platforms, payment gateways, custom product templates."
									placement="top"
									arrow
								>
									<Info className={classes.info} />
								</PlanTip>
							</Typography>
							<Typography variant="h6">
								Analytics
								<PlanTip
									title="Get insights on who is browsing your site so you can male smarter business decisions."
									placement="top"
									arrow
								>
									<Info className={classes.info} />
								</PlanTip>
							</Typography>
							<Typography variant="h6">
								Backups
								<PlanTip
									title="Instant disaster recovery with automated backups."
									placement="top"
									arrow
								>
									<Info className={classes.info} />
								</PlanTip>
							</Typography>
							<Typography variant="h6">
								Content Management
								<PlanTip
									title="Create, store and manage content on the webpage."
									placement="top"
									arrow
								>
									<Info className={classes.info} />
								</PlanTip>
							</Typography>
							<Typography variant="h6">
								Email Setup
								<PlanTip
									title="Domain email accounts as per your domain name."
									placement="top"
									arrow
								>
									<Info className={classes.info} />
								</PlanTip>
							</Typography>
							<Typography variant="h6">
								Website Audits
								<PlanTip
									title="Analytics, ease of management,
										structural quality, security, usablility."
									placement="top"
									arrow
									className={classes.popper}
								>
									<Info
										className={classes.info}
										onClick={() =>
											setShowToolTip(!showTooltip)
										}
									/>
								</PlanTip>
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
					on creating web experiences which are delightful to your
					users and profitable to your business. I start every project
					with very detailed questions about your business and
					customers before i dive into possible solutions. I work with
					selected clients at a time in order to ensure high quality
					and meaningful results. If i feel it won't work for your i
					will tell you and recommend other viable solutions. I only
					take on projects that I know I can complete in time and to
					perfection that will create the maximum value to your
					business and impact to your users psoitively and i assure
					you, the results are better than the money you will spend.
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
