import { useState } from "react";
import { Container, Typography, Button, Paper, Grid } from "@material-ui/core";
import data from "./data.json";
import useStyles from "./styles.js";

const About = () => {
	const classes = useStyles();

	const [skillset] = useState(data.skills);

	return (
		<Container className={classes.about}>
			<div className={`${classes.intro} ${classes.section}`}>
				<div className={classes.meet}>
					<Typography className={classes.caption}>
						about me
					</Typography>
					<Typography variant="h3">Nice to meet you</Typography>
					<Typography variant="h5">
						I am a great problem solver in that i translate your
						business needs to functioning software with a
						combination of design, logic and creativity{" "}
					</Typography>
				</div>

				<div className={classes.imageContainer}>
					<img
						className={classes.image}
						src="https://raw.githubusercontent.com/lumunge/portfolio/master/src/img/meet.png"
						alt="welcome"
					/>
				</div>
			</div>

			<div className={`${classes.section} ${classes.section2}`}>
				<div className={`${classes.story} ${classes.story2}`}>
					<Typography className={classes.caption}>summary</Typography>
					<Typography variant="h3">
						Intersection of Code and Business
					</Typography>
					<Typography variant="h5">
						The internet and technology itself is the greatest
						reward to mankind as it offers us a wide range of
						choices and opportunities in contrast to outdated
						conventional methods where a group controlled what we
						know or can do. It has provided multiple avenues for
						many people to earn a living doing what they love. This
						is my inspiration to being a developer because i can
						play my part in this shift. Software makes a real impact
						in peoples daily lives from blogs that shares awesome
						stories that inspire people to ecommerce stores that
						enable people to shop at the comforts of their homes to
						health systems that diagnose patients for free improving
						the quality of their lives to search engines that save
						us years of rote learning and unnecessary expenses to
						social media that connects people globally.
						<span>Life</span> was meant to be easy and the{" "}
						<span> internet </span> has made it so and is still
						simplifying life for us.
					</Typography>
				</div>
				<div className={classes.imageContainer}>
					<img
						className={classes.image}
						src="https://raw.githubusercontent.com/lumunge/portfolio/master/src/img/codebs.png"
						alt="code_business"
					/>
				</div>
			</div>
			<div className={`${classes.section} ${classes.section1}`}>
				<div className={classes.story}>
					<Typography className={classes.caption}>
						background
					</Typography>
					<Typography variant="h3">Following my Passion</Typography>
					<Typography variant="h5">
						Conventional education did not serve me as wanted, but
						all this changed when i joined university and pursued
						what i liked, Computer Science. I started excelling to
						the point where i discovered that doing what you love
						makes success a joke and life a game so i have been
						playing since 2018. I dived deeper into computer science
						topics such as algorithms and data structures which led
						me to code, the primary factor upon which technology is
						built upon.I am fueled by my passion for understanding
						systems and how they were built, how they work and their
						intended purpose. I consider learning as a life long
						process because if you are not learning you are
						basically rotting. My hunger for knowledge and
						determination to oversee its applications drove me to
						teach myself on my path to make real change with actual
						products. I learned through curiosity how to build
						software and i have never looked back. Sure there are
						frustrating moments in the process but i always come
						through and the feeling of success never gets old. I
						belive in mindfulness, creating your own meaning in life
						and being fully engaged with whatever i am doing and
						this has led me to the habit of spending most of my days
						infront of computer screens. I believe i have found my
						meaning in building software. Apart from my full time
						commitments i tackle interesting freelance projects for
						clients facing different challenges that can be solved
						by technology.
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
				<div className={classes.imageContainer}>
					<img
						className={classes.image}
						src="https://raw.githubusercontent.com/lumunge/portfolio/master/src/img/passion.png"
						alt="passion"
					/>
				</div>
			</div>
			<div className={`${classes.section} ${classes.section2}`}>
				<div className={`${classes.story} ${classes.story2}`}>
					<Typography className={classes.caption}>
						why i code?
					</Typography>
					<Typography variant="h3">
						Building without getting my hands dirty
					</Typography>
					<Typography variant="h5">
						I love to create, from thinking it to building it. The
						process from having a simple idea while going about your
						day and developing it to a complex functioning system
						using all these tools and technologies available,
						dealing with problems that arise in the process and
						finally accomplishing what i set out to do is what i
						love about all this. My imagination is my only
						limitation, as long as i can imagine it, i can build it.
						I love the frustrations and the pain that comes from
						programming. 'No art that is worth while was ever
						created in happiness'. It is like painting, but with a
						numbers and logic. Logic that is simple and yet complex
						at the same time, zeros and ones!. I love being hands on
						on in projects both personal and commercial. For me
						programming is a way to channel my creativity and have
						it impact peoples lives at the same time.
					</Typography>
				</div>
				<div className={classes.imageContainer}>
					<img
						className={classes.image}
						src="https://raw.githubusercontent.com/lumunge/portfolio/master/src/img/codebuild.png"
						alt="building"
					/>
				</div>
			</div>
			<br />
			<br />
			<br />
			<div classname={classes.toolkit}>
				<Typography className={classes.caption}>
					what i know?
				</Typography>
				<Typography variant="h3">Skillset</Typography>
				<Grid container spacing={3} className={classes.skillset}>
					{skillset.map((skill, index) => (
						<Grid
							item
							sm={3}
							xs={6}
							className={classes.tool}
							key={index}
						>
							<div className={classes.icon}>
								<img
									className={classes.iconImg}
									src={skill.url}
									alt={skill.name}
								/>
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
			</div>
			<br />
			<br />
			<br />
			<div className={`${classes.princ} ${classes.section}`}>
				<Typography className={classes.caption}>
					my principles
				</Typography>
				<div className={classes.principles}>
					<Paper className={classes.paper}>
						<Typography variant="h4">Simplicity</Typography>
					</Paper>
					<Paper className={classes.paper}>
						<Typography variant="h4">Precision</Typography>
					</Paper>
					<Paper className={classes.paper}>
						<Typography variant="h4">
							{" "}
							Learning, A Life Long Process
						</Typography>
					</Paper>
					<Paper className={classes.paper}>
						<Typography variant="h4">
							Understanding The User
						</Typography>
					</Paper>
					<Paper className={classes.paper}>
						<Typography variant="h4">Consistency</Typography>
					</Paper>
					<Paper className={classes.paper}>
						<Typography variant="h4">Problem Solving</Typography>
					</Paper>
				</div>
			</div>
			<div className={classes.contact}>
				<Typography className={classes.contactTitle} variant="h4">
					LET'S WORK TOGETHER
				</Typography>
				<Typography variant="body" className={classes.text}>
					Need a simple website, web application or custom software
					built or maybe some advice on how to approach your problem?
					Feel free to contact me. Currently my time books quickly, so
					the sooner the better.
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
