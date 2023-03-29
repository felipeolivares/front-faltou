import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  containerHome: {
    display: "flex",
    flexDirection: "column",
  },
  containerImage: {
    width: "100px",
    height: "100px",
  },
  containerLoginMobile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "16px",
  },
  containerLogin: {
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginPage: {
    display: "flex",
    flexDirection: "column",
    padding: "24px 64px",
  },
  loginMsg: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "24px",
  },
  register: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "4px",
  },
  createAccount: {
    color: "blue",
    paddingLeft: "2px",
    textDecoration: "underline",
    cursor: "pointer",
  },
  containerBack: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "12px",
    paddingRight: "24px",
    cursor: "pointer",
  },
  imageBackIcon: {
    width: "24px",
    heigth: "24px",
    paddingTop: "2px",
    color: "#0061A0",
  },
}));

export default useStyles;
