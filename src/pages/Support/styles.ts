import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    padding: "16px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "50vh",
    flexDirection: "column",
    display: "flex",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    marginTop: "16px",
  },
}));

export default useStyles;
