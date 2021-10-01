import { useState } from "react";
import { Container, Typography, Button, Paper, Grid } from "@material-ui/core";
import data from "./data.json";
// icons
import { FaReact, FaUniversalAccess, FaMaxcdn, FaNeos } from "react-icons/fa";
import {
	DiHtml5,
	DiCss3,
	DiJavascript1,
	DiNodejsSmall,
	DiDjango,
	DiPython,
	DiResponsive,
	DiCode,
	DiGithubBadge,
	DiVisualstudio,
	DiLinux,
	DiNpm,
	DiFirebase,
	DiMongodb,
	DiMysql,
	DiRequirejs,
} from "react-icons/di";
import useStyles from "./styles.js";

const About = () => {
	const classes = useStyles();

	const [skillset] = useState(data.skills);

	return (
		<Container className={classes.about}>
			<div className={classes.intro}>
				<Typography className={classes.caption}>about me</Typography>
				<br />
				<br />
				<Typography variant="h3">Nice to meet you</Typography>
				<Typography variant="h5">
					I work as a software developer translating your business
					requirements to functioning websites and web applications
					with a combination of design, business and logic{" "}
				</Typography>
			</div>

			<div className={classes.image}>
				<img
					src="https://images.unsplash.com/photo-1545665277-5937489579f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvZGUlMjBzZXR1cHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
					alt="setup"
				/>
			</div>

			<div className={classes.story}>
				<Typography className={classes.caption}>summary</Typography>
				<br />
				<br />
				<Typography variant="h3">
					Intersection of Code and Business
				</Typography>
				<Typography variant="h5">
					The internet and technology is the greatest reward to
					mankind as it offers us a wide range of choices and
					opportunities in contrast to outdated conventional ways
					where a group controlled what we know or do. This is my
					inspiration to being a developer because i can build
					anything. Software makes a real impact in peoples lives from
					blogs the shares awesome stories that inspire people to
					ecommerce stores that enable people to shop at the comforts
					of their homes to health systems that diagnose patients for
					free imporoving the quality of lives to search engines that
					save us years of college and expenses that go with to social
					media that connects people.
					<span>Life</span> was meant to be easy and the{" "}
					<span> internet </span> has made it and is still simplifying
					life for us. Soon we would not have to work and the robots
					will be working for us as we sit back and read.
				</Typography>
			</div>
			<div className={classes.story}>
				<Typography className={classes.caption}>background</Typography>
				<br />
				<br />
				<Typography variant="h3">Following my Passion</Typography>
				<Typography variant="h5">
					Conventional education did not serve me as i expected, but
					this all changed when i joined college and pursued what i
					liked, Computer Science. I started excelling to the point
					where i discovered that doing what you love makes success a
					joke and life a game so i have been playing since 2018. I
					dived deeper into computer science topics which introduced
					me to code, the primary factor upon which technolgy is built
					upon and l loved to code ever since. I am fueled by my
					passion for understanding systems and how they were built,
					how they work and their intended purpose. I consider
					learning as a life long activity because if you are not
					growing you are basically decaying. My hunger for knowledge
					and determination to apply it drove me to teach myself on my
					path to make real change with actual products. I learned
					through curiosity how to build software and i have never
					looked back. Sure there are frustrating moments in the
					process but i always come through and the feeling of success
					never gets old. I belive in mindfullness, creating your own
					meaning and being fully engaged with whatever i am doing and
					has led me to the habit of spending most of my day infront
					of screens. I believe i have found my meaning in building
					software. Apart from my full time commitments i takle
					interesting freelance projects for clients facing different
					challenges that can be solved by technology.
					<Typography variant="h6">
						<a
							href="https://forms.gle/tpUzNEhPSmHneKUo6"
							className={classes.reachOut}
							target="_blank"
							rel="noreferrer"
						>
							Reach out
						</a>{" "}
						to connect with me.
					</Typography>
				</Typography>
			</div>
			<div className={classes.story}>
				<Typography className={classes.caption}>why i code?</Typography>
				<br />
				<br />
				<Typography variant="h3">
					Building without getting my hands dirty
				</Typography>
				<Typography variant="h5">
					I love to create, from thinking of it to actual conception
					of ideas. I love being hands on on projects both personal
					and commercial. For me programming is a way to channel my
					creativity and have it impact peoples live positively.
				</Typography>
			</div>
			<Container classname={classes.tookit}>
				<Typography className={classes.caption}>
					what do i know?
				</Typography>
				<br />
				<br />
				<Typography variant="h3">Skillset</Typography>
				<Grid container spacing={3} className={classes.skillset}>
				{skillset.map((skill, index) => (
					<Grid item sm={3} xs={6} className={classes.tool}>
					<div className={classes.icon}>
						<img className={classes.iconImg} src={skill.url} alt={skill.name} />
					</div>
					<Typography
						variant="caption"
						component="p"
						className={classes.iconText}
					>
						{skill.name}
					</Typography>
				</Grid>
				))}
				</Grid>
				{/* <Grid container spacing={3} className={classes.skillset}>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<DiHtml5 />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							Html5
						</Typography>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<DiCss3 />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							CSS3
						</Typography>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<FaMaxcdn />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							Material UI
						</Typography>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<DiJavascript1 />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							Vanilla Javascript
						</Typography>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<DiNodejsSmall />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							Node js
						</Typography>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<FaReact />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							React js
						</Typography>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<FaNeos />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							Next js
						</Typography>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<DiPython />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							Python
						</Typography>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<DiDjango />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							Django Framework
						</Typography>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<DiGithubBadge />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							Git and Github
						</Typography>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<DiFirebase />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							Firebase
						</Typography>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<DiMongodb />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							MongoDB
						</Typography>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<DiMysql />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							SQL Databases
						</Typography>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<DiNpm />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							NPM
						</Typography>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<DiCode />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							Building & Consuming APIs
						</Typography>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<DiRequirejs />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							Postman/ThunderClient/Curl
						</Typography>
					</Grid>

					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<DiLinux />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							Linux & terminal
						</Typography>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<DiVisualstudio />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							Vs Code
						</Typography>
					</Grid>

					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<FaUniversalAccess />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							SEO & Accessibilty
						</Typography>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.tool}>
						<span className={classes.icon}>
							<DiResponsive />
						</span>
						<Typography
							variant="caption"
							component="p"
							className={classes.iconText}
						>
							Responsive Design
						</Typography>
					</Grid>
				</Grid> */}
			</Container>
			<div>
				<Typography className={classes.caption}>
					my principles
				</Typography>
				<br />
				<br />
				<div className={classes.principles}>
					<Paper className={classes.paper}>
						<Typography variant="h4"> Effectiveness</Typography>
					</Paper>
					<Paper className={classes.paper}>
						<Typography variant="h4">Efficiency</Typography>
					</Paper>
					<Paper className={classes.paper}>
						<Typography variant="h4">
							{" "}
							Learning is Life Long Process
						</Typography>
					</Paper>
					<Paper className={classes.paper}>
						<Typography variant="h4"> Consistency</Typography>
					</Paper>
					<Paper className={classes.paper}>
						<Typography variant="h4"> Know your Users</Typography>
					</Paper>
				</div>
			</div>
			<div className={classes.contact}>
				<Typography className={classes.contactTitle} variant="h4">
					LET'S WORK TOGETHER
				</Typography>
				<Typography variant="caption" className={classes.text}>
					Need a simple website or web application built or maybe some
					advice on how to approach your problem? Feel free to contact
					me. Currently my time books quickly, so the sooner the
					better.
				</Typography>
				<Button variant="contained" className={classes.button}>
					<a
						href="https://forms.gle/tpUzNEhPSmHneKUo6"
						className={classes.link}
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						Get Started{" "}
					</a>
				</Button>
			</div>
		</Container>
	);
};

export default About;
