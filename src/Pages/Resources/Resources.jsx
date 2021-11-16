import { Typography, Paper, Grid } from "@material-ui/core";
import useStyles from "./styles.js";

const Resources = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={12} md={6}>
					<Paper elevation={4} className={classes.paper}>
						<Typography variant="h4">Articles</Typography>
						<a
							href="http://algorithmexamples.com/"
							target="_blank"
							rel="noreferrer"
							className={classes.link}
						>
							Algorithms Examples
						</a>
						<a
							href="https://www.cprogramming.com/whatdoesittake.html"
							target="_blank"
							rel="noreferrer"
							className={classes.link}
						>
							{" "}
							What it takes to be a programmer{" "}
						</a>
						<a
							href="https://www.cprogramming.com/whyprogram.html"
							target="_blank"
							rel="noreferrer"
							className={classes.link}
						>
							{" "}
							Why program{" "}
						</a>
						<a
							href="https://www.cprogramming.com/tutorial/thinking.html"
							target="_blank"
							rel="noreferrer"
							className={classes.link}
						>
							{" "}
							Thinking like a programmer{" "}
						</a>
	                    <a
							href="https://towardsdatascience.com/10-graph-algorithms-visually-explained-e57faa1336f3"
							target="_blank"
							rel="noreferrer"
							className={classes.link}
						>
							{" "}
							Graph algorithms{" "}
						</a>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Paper elevation={4} className={classes.paper}>
						<Typography variant="h4">Videos, Podcasts & Documentaries</Typography>
						<a
							href="https://youtu.be/WXuK6gekU1Y"
							target="_blank"
							rel="noreferrer"
							className={classes.link}
						>
							Alpha go.{" "}
						</a>
						<a
							href="https://youtu.be/5dZ_lvDgevk"
							target="_blank"
							rel="noreferrer"
							className={classes.link}
						>
							In the age of AI.{" "}
						</a>
						<a
							href="https://youtu.be/1-TZqOsVCNM"
							target="_blank"
							rel="noreferrer"
							className={classes.link}
						>
							How to get rich.{" "}
						</a>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Paper elevation={4} className={classes.paper}>
						<Typography variant="h4">Books</Typography>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.pdfdrive.com/mastery-e156695001.html"
							className={classes.link}
						>
							Mastery - Robert Greene{" "}
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.pdfdrive.com/the-master-algorithm-how-the-quest-for-the-ultimate-learning-machine-will-remake-our-world-e158721606.html"
							className={classes.link}
						>
							The Master Algorithm - Pedro Domingos{" "}
						</a>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Paper elevation={4} className={classes.paper}>
						<Typography variant="h4">
							Courses & Learning Paths
						</Typography>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://leetcode.com/study-plan/"
							className={classes.link}
						>
							DSA Problems
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://classroom.udacity.com/courses/ud281"
							className={classes.link}
						>
							High performance computing
						</a>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Paper elevation={4} className={classes.paper}>
						<Typography variant="h4">Papers & Publications</Typography>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://arxiv.org/ftp/arxiv/papers/2109/2109.01719.pdf"
							className={classes.link}
						>
						Quick sort comparative analysis
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.researchgate.net/publication/2928615_Parallelized_QuickSort_with_Optimal_Speedup"
							className={classes.link}
						>
						Parallel quick sort
						</a>
                        <a
							target="_blank"
							rel="noreferrer"
							href="https://arxiv.org/ftp/arxiv/papers/1406/1406.2294.pdf"
							className={classes.link}
						>
						Jump consistent hash
						</a>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default Resources;
