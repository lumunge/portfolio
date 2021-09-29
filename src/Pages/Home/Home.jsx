import { useState } from "react";
import data from './data.json';
import { Link } from "react-router-dom";
import { Container, Button, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles.js";

const Home = () => {
	const classes = useStyles();
	const [cases, setCases] = useState(data.caseStudies)

	return (
		<Container>
			<div className={classes.intro}>
				<div>
					<Typography>whoami</Typography>
					<Typography variant="h2" className={classes.title}>Software Developer</Typography>
					<Typography className={classes.about} variant="h5">
						lumunge is a{" "}
						<span className={classes.highlights}>
							software developer
						</span>{" "}
						with 3 years developing software from simple 'hello
						world' programs to complex multi-user web applications.
						He has a background in computer science, and loves
						cycling, chess and solving puzzles.
					</Typography>
				</div>
				<div>
					<img
						className={classes.profileImg}
						src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
						alt="lumunge"
					/>
				</div>
			</div>
			<div>
				<div className={classes.cta}>
					<div className={classes.cta1}>
						<Typography>workflow</Typography>
						<Typography variant="h2">
							Development Process
						</Typography>
						<Typography variant="h6">
							Reach your business goals with an excellent website
							that make users keep coming back, Fomr idea to
							tangible working result From idea to tangible
							working software. Lets Begin
						</Typography>
					</div>
					<div className={classes.cta2}>
						<Button variant="contained" className={classes.start}>
							Start a project
						</Button>
						<Button
							variant="contained"
							component={Link}
							to="/contact"
						>
							Learn More
						</Button>
					</div>
				</div>
				<div className={classes.process}>
					<div>
						<Typography variant="h4"> 01. Ideation</Typography>
						<Typography variant="h6">
							Questions First. Before starting to write code i
							always make sure that we understand whatever we are
							trying to accomplish by asking the rights questions.
							This stage entails alot of meetings, competitive
							analysis, solutions exploration and requirements
							gathering.
						</Typography>
					</div>
					<div>
						<Typography variant="h4">02. Strategy</Typography>
						<Typography variant="h6">
							Goals. Here I learn as much about your project,
							brand, customers/users. I try to understand the
							problem i am trying to solve, what a win will look
							like. From that I come up with a plan to move
							forward and I present you with all deliverables.
						</Typography>
					</div>
					<div>
						<Typography variant="h4">03. Design</Typography>
						<Typography variant="h6">
							Look and Feel. At the end of this phase you will
							have a clear idea of the look and feel of your site.
							As part of this process I shall incorporate elements
							such as company logo and colors matching you
							identity as a business or person.
						</Typography>
					</div>
					<div>
						<Typography variant="h4">04. Development</Typography>
						<Typography variant="h6">
							Developement. I am eager to materialize your idea to
							a working website, with clear requirements it is
							time to develop content for the page such as videos,
							images and other media. Depending on the
							requirements we may incorporate third party services
							such as live chat, email setup, backups and more.
						</Typography>
					</div>
					<div>
						<Typography variant="h4">05. Testing</Typography>
						<Typography variant="h6">
							Does it Work?. I put your website through a series
							of tests on a development server to see if all
							features are working as they should. Testing will be
							critial as issues are inevitable and need to be
							addressed before the site goes live.
						</Typography>
					</div>
					<div>
						<Typography variant="h4">06. Launch</Typography>
						<Typography variant="h6">
							Success. The day has come . In this phase I present
							you with the final product over a cup of coffee. We
							test the functionality of the system with some of
							your users and determine wheather it addresses their
							needs and making small adjustments here and there to
							perfection.
						</Typography>
					</div>
				</div>
			</div>

			<div>
				<Typography>case studies</Typography>
				{cases.map((study, index) => (
					<Paper elevation={3} className={classes.paper}>
					<div className={classes.imgContainer}>
						<a href={study.image} rel="noreferrer" target="_blank">
						<img
							className={classes.projectImage}
							src={study.image}
							alt="project"
						/>
						</a>
					</div>
					<div className={classes.details}>
						<Typography variant="button">
							{study.tags}
						</Typography>
						<br />
						<br />
						<Typography variant="h5">{study.title}</Typography>
						<Typography variant="subtitle">
							{study.description}
						</Typography>
						<br />
						<br />
						<br />
						<Button variant="contained"><a href={study.url} rel="noreferrer" target="_blank" className={classes.link}>View Site</a></Button>
						{"  "}
						<Button variant="contained"><a href={study.github} rel="noreferrer" target="_blank" className={classes.link}>Source</a></Button>
					</div>
				</Paper>
				))}
				<div className={classes.more}>
					<Button
						variant="contained"
						className={classes.navLinks}
						component={Link}
						to="/work"
					>
						More
					</Button>
				</div>
			</div>
			<div className={classes.contact}>
				<Typography variant="h4">LET'S WORK TOGETHER</Typography>
				<Typography>lumungep12@gmail.com</Typography>
			</div>
		</Container>
	);
};

export default Home;
