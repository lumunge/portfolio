import useStyles from "./styles.js";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import leetcode from "../../img/leetcode.png";
import hackerrank from "../../img/hackerrank.png";

const Social = () => {
  const classes = useStyles();
  return (
    <div className={classes.socials}>
      <div className={classes.icon}>
        <a href="https://github.com/lumunge" target="_blank" rel="noreferrer">
          <img src={github} alt="github" className={classes.iconImage} />
        </a>
      </div>
      <div className={classes.icon}>
        <a
          href="https://www.linkedin.com/in/lumunge/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linked in" className={classes.iconImage} />
        </a>
      </div>
      <div className={classes.icon}>
        <a
          href="https://leetcode.com/lumunge/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={leetcode} alt="leetcode" className={classes.iconImage} />
        </a>
      </div>
      <div className={classes.icon}>
        <a
          href="https://www.hackerrank.com/lumunge"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={hackerrank}
            alt="hackerrank"
            className={classes.iconImage}
          />
        </a>
      </div>
    </div>
  );
};

export default Social;
