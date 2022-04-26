import { useState } from "react";
import data from "./data.json";
import { Link } from "react-router-dom";
import lumunge from "../../img/lumunge.jpg";
import { Container, Button, Paper, Typography } from "@material-ui/core";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles.js";

const Home = () => {
  const classes = useStyles();
  const [cases] = useState(data.caseStudies);

  return (
    <Container className={classes.mainContainer}>
      <div className={classes.profileCard}>
        <div className={classes.backImage}> </div>
        <div className={classes.intro}>
          <div className={classes.introInfo}>
            <header>
              <Typography className={classes.profileCaption}>whoami</Typography>
            </header>
            <div className={classes.name}>
              <Typography variant="h2" className={classes.title}>
                lumunge
              </Typography>
            </div>
            <div className={classes.info}>
              <Typography className={classes.about} variant="h5">
                I am a passionate and curious
                <span className={classes.highlights}>programmer</span> with a
                background in computer science.
              </Typography>
              <Typography variant="h6">
                I am fond of technology and the disruption it brings. I take the
                leap every day to improve myself not just for personal reasons
                but because I understand the impact one can make with technology
                to change the lives of those around them. Life was meant to be
                easy and technology solves that problem every day. I love a game
                of chess, coding, puzzles, cycling, Linux, problem-solving,
                writing, and mindfulness.
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.profile}>
          <img
            className={classes.profileImg}
            src={lumunge}
            alt="lumunge_image"
          />
        </div>
      </div>
      {/* <div>
				<div className={classes.cta}>
					<div className={classes.cta1}>
						<Typography className={classes.caption}>
							my workflow
						</Typography>
						<Typography variant="h2" className={classes.h2}>
							Development Process
						</Typography>
						<Typography variant="h6">
							Reach your business goals with an excellent website
							that makes users keep coming back, From idea to a
							tangible working software in matter of time. Lets
							Begin.
						</Typography>
					</div>
					<div className={classes.cta2}>
						<Button variant="contained" className={classes.start}>
							<a
								href="https://forms.gle/tpUzNEhPSmHneKUo6"
								className={classes.link}
								target="_blank"
								rel="noreferrer"
							>
								Start a project
							</a>
						</Button>
						&nbsp;&nbsp;
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
							Questions First. Before i start writing code i
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
							critical as issues are inevitable and need to be
							addressed before the site goes live.
						</Typography>
					</div>
					<div>
						<Typography variant="h4">06. Launch</Typography>
						<Typography variant="h6">
							Success. The day has finally come. At this stage I
							present you with the final product over a cup of
							coffee. We test the functionality of the system with
							some of your users and determine whether it
							addresses their needs and making small adjustments
							here and there to perfection.
						</Typography>
					</div>
				</div>
			</div> */}

      <div>
        <Typography className={classes.caption}>problems solved</Typography>
        <Typography variant="h2" className={classes.h2}>
          Case Studies
        </Typography>

        {cases.map((study, index) => (
          <Paper elevation={3} className={classes.paper} key={index}>
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
              <Typography variant="button">{study.tags}</Typography>
              <br />
              <br />
              <Typography variant="h5">{study.title}</Typography>
              <Typography variant="subtitle">{study.description}</Typography>
              <br />
              <br />
              <br />
              <Button variant="contained">
                <a
                  href={study.url}
                  rel="noreferrer"
                  target="_blank"
                  className={classes.link}
                >
                  View Site
                </a>
              </Button>
              {"  "}
              <Button variant="contained">
                <a
                  href={study.github}
                  rel="noreferrer"
                  target="_blank"
                  className={classes.link}
                >
                  Source
                </a>
              </Button>
            </div>
          </Paper>
        ))}
        <div className={classes.more}>
          <Button className={classes.moreBtn} component={Link} to="/work">
            <MoreHoriz className={classes.moreIcon} />
          </Button>
        </div>
      </div>

      {/* <div className={classes.contact}>
				<Typography variant="h4">LET'S WORK TOGETHER</Typography>
				<Button variant="contained" className={classes.start}>
					<a
						href="https://forms.gle/tpUzNEhPSmHneKUo6"
						className={classes.link}
						target="_blank"
						rel="noreferrer"
					>
						Start a project
					</a>
				</Button>
			</div> */}
    </Container>
  );
};

export default Home;
