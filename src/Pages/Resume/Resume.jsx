// import { Link } from "react-router-dom";
import { Container, Paper, Typography } from "@material-ui/core";
// import * as fs from "fs";
import useStyles from "./styles.js";

const Resume = () => {
  const classes = useStyles();

  return (
    <Container>
      <Paper elevation={4}>
        <header>
          <div className={classes.hLeft}>
            <span>Resume</span>
          </div>
          <div className={classes.rLeft}>
            <span>Share, Download Icons</span>
          </div>
        </header>
        <div className="intro">
          <div className="rIntro">image here</div>
          <div className="introduction">
            <header>
              <span>Lumunge. E</span>
              <div>
                <span>lumungep12@gmail.com</span>
                <span>https://www.github.com/lumunge</span>
                <span>linked in url</span>
              </div>
            </header>
            <div className="main">
              <Typography>
                I am an experienced Full-stack Software Developer with 2 years
                of professional experience in developing software using a
                variety of tools and technologies. My strengths lie in backend
                node js development, python, javascript/typescript, React.js,
                Next.js, and SQL. I am certified in data structures and
                algorithms and mathematical thinking in computer science
                therefore my problem-solving skills are impeccable. I take pride
                and have an immense passion for what I do.
              </Typography>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="skill">
            ICON HERE<span className="heading">Technical Skills</span>
            <p>skillname | years</p>
          </div>
        </div>
        <div className="work">
          <div className="lWork">
            ICON HERE <span className="heading">Work History</span>
          </div>
          <div className="rWork">
            <div className="singleWork">
              <header>
                <div className="title">
                  <p>Titlte here</p>
                </div>
                <div className="timestamp">today</div>
              </header>
              <div className="main">text here</div>
            </div>
          </div>
        </div>
        <div className="sideProjects">
          <div className="lWork">
            ICON HERE <span className="heading">Side projects</span>
          </div>
          <div className="rWork">
            <div className="singleWork">
              <header>
                <div className="title">
                  <p>Titlte here</p>
                </div>
                <div className="timestamp">today</div>
              </header>
              <div className="main">text here</div>
            </div>
          </div>
        </div>
        <div className="education">
          <div className="lWork">
            ICON HERE <span className="heading">Education</span>
          </div>
          <div className="rWork">
            <div className="singleWork">
              <header>
                <div className="timestamp">today</div>
                <div className="title">
                  <p>Titlte here</p>
                  <p>course</p>
                </div>
              </header>
            </div>
          </div>
        </div>
        <div className="publications">
          <p>timestamp</p>
          <div className="title">
            <p>title</p>
            <p>url</p>
          </div>
        </div>
        <div className="certification">
          <div className="cert">
            <p className="timestamp"></p>
            <p>cert title</p>
            <p>Cert verify</p>
          </div>
        </div>
      </Paper>
    </Container>
  );
};

export default Resume;
