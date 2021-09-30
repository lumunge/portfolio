import { Typography, Container, Paper, Grid } from "@material-ui/core";
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
							href="https://www.cprogramming.com/whatdoesittake.html"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							What it takes to be a programmer{" "}
						</a>
						<a
							href="https://www.cprogramming.com/whyprogram.html"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							Why program{" "}
						</a>
						<a
							href="https://www.cprogramming.com/tutorial/thinking.html"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							Thinking like a programmer{" "}
						</a>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Paper elevation={4} className={classes.paper}>
						<Typography variant="h4">Videos & Podcasts</Typography>
						<a
							href="https://www.youtube.com/watch?v=nLmhmB6NzcM"
							target="_blank"
							rel="noreferrer"
						>
							Solving 0/1 Knapsack Problem{" "}
						</a>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Paper elevation={4} className={classes.paper}>
						<Typography variant="h4">Books</Typography>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.amazon.com/gp/product/014312417X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=014312417X&linkCode=as2&tag=lumunge-20&linkId=a387334847b14cbfc0bcb496d8db0541"
						>
							Mastery - Robert Greene{" "}
						</a>
                        <a target="_blank" rel="noreferrer" href="https://www.amazon.com/gp/product/0465094279/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0465094279&linkCode=as2&tag=lumunge-20&linkId=3dd936f7bd18f1f92a3fa64f913eeb88">The Master Algorithm{" "}</a>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Paper elevation={4} className={classes.paper}>
						<Typography variant="h4">Courses</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Paper elevation={4} className={classes.paper}>
						<Typography variant="h4">Papers</Typography>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default Resources;
