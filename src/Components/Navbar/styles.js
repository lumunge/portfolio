import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  navBar: {
    backgroundColor: "#17202a",
    padding: "10px 0",
  },
  logo: {
    color: "#fff",
    fontSize: "1.5rem",
    textDecoration: "none",
    "&:hover": {
      color: "#f39c12",
      transition: "all .5s ease-in-out",
    },
  },
  navLinks: {
    color: "#fff",
    textTransform: "lowercase",
    fontSize: "1.2rem",
    margin: "0 2rem",
    "&:hover": {
      color: "#f39c12",
      transition: "all .5s ease-in-out",
    },
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-evenly",
    "@media (max-width: 780px)": {
      display: "none",
    },
  },
  responsive: {
    display: "none",
    "@media (max-width: 780px)": {
      display: "flex",
      justifyContent: "space-around",
    },
  },
  menu: {
    background: "#17202a",
  },
  resume: {
    textDecoration: "none",
    color: "inherit",
  },
  socials: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // width: "100px",
    position: "absolute",
    right: "0",
    float: "right",
    padding: "0 4rem 0 0",
  },
  icon: {
    width: "30px",
    height: "30px",
    margin: "0 1rem",
  },
  iconImage: {
    width: "100%",
    height: "100%",
  },
}));
