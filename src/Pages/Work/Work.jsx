import {useState} from "react";
import { Container, Typography, Paper, Button } from "@material-ui/core";
import data from './data.json';
import useStyles from "./styles.js";

const Work = () => {
    const classes = useStyles();
    const [cases] = useState(data.caseStudies);

	return (
		<div className={classes.container}>
			<Typography variant="caption">More Case studies</Typography>
            <Container>
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
                </Container>
		</div>
	);
};

export default Work;
