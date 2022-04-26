import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  socials: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "0",
    float: "right",
    padding: "0 4rem 0 0",
    "@media (max-width: 1420px)": {
      display: "none",
    },
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
