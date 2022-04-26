import { makeStyles } from "@material-ui/core/styles";
import backImg from "../../img/backImg.jpg";

export default makeStyles(() => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  profileCard: {
    display: "flex",
    marginTop: "10rem",
    marginBottom: "4rem",
    width: "100%",
    backgroundColor: "rgba(189, 195, 199, 0.1)",
    borderRadius: "5px",
    "@media (max-width: 780px)": {
      display: "flex",
      flexDirection: "column-reverse",
      width: "100%",
      marginTop: "6rem",
      marginBottom: "4rem",
    },
  },
  backImage: {
    width: "30%",
    backgroundImage: `url(${backImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "5px 0 0 5px",
    "@media (max-width: 780px)": {
      display: "none",
    },
  },
  intro: {
    width: "70%",
    "@media (max-width: 780px)": {
      width: "100%",
      paddingTop: "4rem",
    },
  },
  introInfo: {
    paddingBottom: "1rem",
    "@media (max-width: 780px)": {
      paddingTop: "2rem",
    },
  },
  name: {
    paddingLeft: "5rem",
  },
  info: {
    padding: "0 2rem 0 5rem",
    "@media (max-width: 780px)": {
      padding: "0 1rem",
    },
  },
  header: {
    textAlign: "right",
  },
  profileCaption: {
    color: "#f39c12",
    textAlign: "right",
    padding: "2rem 2rem 0 0",
    "@media (max-width: 780px)": {
      textAlign: "left",
      paddingLeft: "1rem",
    },
  },
  about: {
    lineHeight: "3rem",
  },
  profile: {
    position: "relative",
    right: "68%",
    width: "200px",
    height: "200px",
    "@media (max-width: 780px)": {
      position: "relative",
      left: "0",
      top: "100px",
      margin: "0 auto",
    },
  },
  profileImg: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    "@media (min-width: 780px)": {
      objectFit: "cover",
      width: "100%",
    },
  },
  highlights: {
    backgroundColor: "#f39c12",
    padding: "5px",
  },
  paper: {
    display: "flex",
    margin: "2rem 0",
    width: "100%",
    height: "350px",
    "@media (max-width: 780px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
      paddingBottom: "2rem",
    },
  },
  details: {
    padding: "2rem 2rem 0 4rem",
    width: "50%",
    "@media (max-width: 780px)": {
      padding: "1rem",
      width: "100%",
    },
  },
  imgContainer: {
    width: "50%",
    height: "350px",
    "@media (max-width: 780px)": {
      width: "100%",
    },
  },
  projectImage: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
    "@media (max-width: 780px)": {
      width: "100%",
    },
  },
  cta: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem 0",
    width: "100%",
    "@media (max-width: 780px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  cta1: {
    width: "50%",
    "@media (max-width: 780px)": {
      width: "100%",
      textAlign: "center",
    },
  },
  cta2: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 780px)": {
      padding: "2rem 0",
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
  },
  h2: {
    "@media (max-width: 780px)": {
      fontSize: "3rem",
    },
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "20vh",
    backgroundColor: "#f39c12",
    color: "#17202a",
    marginBottom: "4rem",
    width: "100%",
    "@media (max-width: 780px)": {
      textAlign: "center",
      fontSize: "4rem",
    },
  },
  process: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "1.5rem",
    padding: "2rem 0",
    "@media (max-width: 780px)": {
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  more: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "2rem 0",
  },
  moreBtn: {
    padding: 0,
    "&:hover": {
      cursor: "pointer",
    },
  },
  moreIcon: {
    fontSize: "3rem",
    color: "#fff",
  },
  link: {
    textDecoration: "none",
    color: "#333",
  },
  caption: {
    color: "#f39c12",
  },
}));
