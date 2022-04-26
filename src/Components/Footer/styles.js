import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  footer: {
    backgroundColor: "#fff",
    color: "#000",
    textAlign: "center",
    padding: "1rem 0",
  },
  footerSocial: {
    display: "none",
    "@media (min-width: 300px)": {
      display: "block",
    },
  },
  icon: {
    width: "20px",
    height: "20px",
    margin: "0 1rem",
  },
  iconImage: {
    width: "100%",
    height: "100%",
  },
  socials: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footerDetails: {
    paddingTop: "1rem",
  },
}));
