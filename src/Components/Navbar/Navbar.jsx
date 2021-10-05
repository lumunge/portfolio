import {useState} from'react'
import {Link} from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Menu, MenuItem, } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
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
                <Typography className={classes.logo} variant="h6" component={Link} to={process.env.PUBLIC_URL + "/"}>lumunge</Typography>
				</div>
				<div>
                <Button className={classes.navLinks} component={Link} to={process.env.PUBLIC_URL + "/work"}>
					Work
				</Button>
				<Button className={classes.navLinks} component={Link} to="/about">
					About
				</Button>
				<Button className={classes.navLinks} component={Link} to="/resources">
					Resources
				</Button>
                <Button className={classes.navLinks} component={Link} to="/contact">
					Contact
				</Button>
				</div>
			</Toolbar>
			<div className={classes.responsive}>
				<div>
					<MenuItem component={Link} to="/">lumunge</MenuItem>
				</div>
				<div>
				<MenuItem onClick={handleClick} >
					<SortIcon/>
				</MenuItem>
				<Menu
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose} component={Link} to="/work">work</MenuItem>
					<MenuItem onClick={handleClose} component={Link} to="/about">about</MenuItem>
					<MenuItem onClick={handleClose} component={Link} to="/resources">resources</MenuItem>
					<MenuItem onClick={handleClose} component={Link} to="/contact">contact</MenuItem>
				</Menu>
				</div>
			</div>
		</AppBar>
	);
};

export default Navbar;
