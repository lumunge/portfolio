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
					<Button
						className={classes.navLinks}
						component={Link}
						to="/work"
					>
						Work
					</Button>
					<Button
						className={classes.navLinks}
						component={Link}
						to="/resources"
					>
						Resources
					</Button>
					<Button
						className={classes.navLinks}
					>
						<a
							className={classes.resume}
							href="https://iq.opengenus.org/author/erick/"
							target="_blank"
							rel="noreferrer"
						>
							Blog
						</a>
					</Button>
					<Button className={classes.navLinks}>
						<a
							className={classes.resume}
							href="https://ke.linkedin.com/in/lumunge"
							target="_blank"
							rel="noreferrer"
						>
							Resume
						</a>
					</Button>
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
						<MenuItem
							onClick={handleClose}
							component={Link}
							to="/work"
						>
							work
						</MenuItem>
						<MenuItem
							onClick={handleClose}
							component={Link}
							to="/resources"
						>
							resources
						</MenuItem>
						<MenuItem
							onClick={handleClose}
						>
							<a
							className={classes.resume}
							href="https://iq.opengenus.org/author/erick/"
							target="_blank"
							rel="noreferrer"
						>
							blog
						</a>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<a
								className={classes.resume}
								href="https://ke.linkedin.com/in/lumunge"
								target="_blank"
								rel="noreferrer"
							>
								resume
							</a>
						</MenuItem>
					</Menu>
				</div>
			</div>
		</AppBar>
	);
};

export default Navbar;
