import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import leetcode from "../../img/leetcode.png";
import hackerrank from "../../img/hackerrank.png";
import useStyles from "./styles";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className={classes.navBar}>
      <Toolbar className={classes.toolBar}>
        <div>
          <Typography
            className={classes.logo}
            variant="h6"
            component={Link}
            to="/"
          >
            lumunge
          </Typography>
        </div>
        <div>
          <Button className={classes.navLinks} component={Link} to="/work">
            Work
          </Button>
          <Button className={classes.navLinks} component={Link} to="/resources">
            Resources
          </Button>
          {/* <Button className={classes.navLinks} component={Link} to="/articles">
            Articles
          </Button> */}
          <Button className={classes.navLinks}>
            <a
              className={classes.resume}
              href="https://iq.opengenus.org/author/erick/"
              target="_blank"
              rel="noreferrer"
            >
              Articles
            </a>
          </Button>
          <Button className={classes.navLinks}>
            <a
              className={classes.resume}
              href="https://raw.githubusercontent.com/lumunge/portfolio/master/src/Files/lumungeResume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </Button>
          {/* <Button className={classes.navLinks} component={Link} to="/resume">
            Resume
          </Button> */}
        </div>
        <div className={classes.socials}>
          <div className={classes.icon}>
            <a
              href="https://github.com/lumunge"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" className={classes.iconImage} />
            </a>
          </div>
          <div className={classes.icon}>
            <a
              href="https://www.linkedin.com/in/lumunge/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="linked in"
                className={classes.iconImage}
              />
            </a>
          </div>
          <div className={classes.icon}>
            <a
              href="https://leetcode.com/lumunge/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={leetcode}
                alt="leetcode"
                className={classes.iconImage}
              />
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
      </Toolbar>
      <div className={classes.responsive}>
        <div>
          <MenuItem component={Link} to="/">
            lumunge
          </MenuItem>
        </div>
        <div>
          <MenuItem onClick={handleClick}>
            <SortIcon />
          </MenuItem>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/work">
              work
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/resources">
              resources
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a
                className={classes.resume}
                href="https://iq.opengenus.org/author/erick/"
                target="_blank"
                rel="noreferrer"
              >
                Articles
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a
                className={classes.resume}
                href="https://raw.githubusercontent.com/lumunge/portfolio/master/src/Files/lumungeResume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
            </MenuItem>
            {/* <MenuItem onClick={handleClose} component={Link} to="/resume">
              resume
            </MenuItem> */}
          </Menu>
        </div>
      </div>
    </AppBar>
  );
};

export default Navbar;
