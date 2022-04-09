import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@material-ui/core";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import leetcode from "../../img/leetcode.png";
import hackerrank from "../../img/hackerrank.png";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  let date = new Date().getFullYear();

  return (
    <div className={classes.footer}>
      <div className={classes.socials}>
        <div className={classes.icon}>
          <a href="https://github.com/lumunge">
            <img src={github} alt="github" className={classes.iconImage} />
          </a>
        </div>
        <div className={classes.icon}>
          <a href="https://www.linkedin.com/in/lumunge/">
            <img src={linkedin} alt="linked in" className={classes.iconImage} />
          </a>
        </div>
        <div className={classes.icon}>
          <a href="https://leetcode.com/lumunge/">
            <img src={leetcode} alt="leetcode" className={classes.iconImage} />
          </a>
        </div>
        <div className={classes.icon}>
          <a href="https://www.hackerrank.com/lumunge">
            <img
              src={hackerrank}
              alt="hackerrank"
              className={classes.iconImage}
            />
          </a>
        </div>
      </div>
      <div className={classes.footerDetails}>
        <Typography>Copyright @ {date} lumunge</Typography>
      </div>
    </div>
  );
};

export default Footer;
