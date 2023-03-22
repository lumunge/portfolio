import { useState } from "react";
import data from "./data.json";
import { Link } from "react-router-dom";
import lumunge from "../../img/profile.png";
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
            <div className={classes.info}>
              <Typography variant="h6">
              I have been a software engineer for 5 years, have a solid background in computer science, and I have a strong enthusiasm and curiosity for programming. Motivated by a sincere interest in how technology can transform our world, I am continuously looking for new tasks and chances to advance my knowledge and skills.
Recognizing the enormous potential for technology to simplify and enhance our lives, I am dedicated to using my programming expertise to make a positive difference. I have a wide range of hobbies outside of work, such as chess, puzzles, riding, Linux, and mindfulness, all of which help to shape my well-rounded and original problem-solving style.
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
