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
              href="https://www.cprogramming.com/"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              {" "}
              Great blog on C programming and programming advice
            </a>
            <a
              href="https://towardsdatascience.com/10-graph-algorithms-visually-explained-e57faa1336f3"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              {" "}
              A summary of graph algorithms.{" "}
            </a>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper elevation={4} className={classes.paper}>
            <Typography variant="h4">
              Videos, Podcasts & Documentaries
            </Typography>
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
            <Typography variant="h4">Books & Authors</Typography>
            <ul>
              <li>Donald Knuth - AOCP Volumes</li>
              <li>Competitive programmer's handbook - Antti Laaksonen</li>
              <li>Automate the boring stuff with python - Al Sweigart</li>
              <li>Algorithms in a Nutshell - George T. Heineman</li>
              <li>The algorithm design manual - Steven S. Skiena</li>
              <li>Clean Code - Robert C. Martin</li>
              <br />
              <li>Jed Mckenna</li>
              <li>Friedrich Nietzsche</li>
              <li>Robert Greene</li>
              <li>Homo Deus - Yuval Noah Harari</li>
              <li>Jeff Hawkins - On Intelligence</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper elevation={4} className={classes.paper}>
            <Typography variant="h4">Courses & Learning Paths</Typography>
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
            <a
              target="_blank"
              rel="noreferrer"
              href="http://algorithmexamples.com/"
              className={classes.link}
            >
              Algorithms Examples
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.vssut.ac.in/lecture_notes/lecture1422914957.pdf"
              className={classes.link}
            >
              Compiler Design
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://groups.seas.harvard.edu/courses/cs153/2019fa/lectures/Lec19-Optimization.pdf"
              className={classes.link}
            >
              Compiler Optimizations.
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://leetcode.com/list/x1k8lxi5/"
              className={classes.link}
            >
              Beginner Dynamic programming Guide.
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://leetcode.com/discuss/general-discussion/458695/Dynamic-Programming-Patterns"
              className={classes.link}
            >
              Dynamic Programming Patterns.
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://chuka231.blogspot.com/2021/01/leetcode-all-dynamic-programming.html"
              className={classes.link}
            >
              Dynamic Programming Problems.
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
