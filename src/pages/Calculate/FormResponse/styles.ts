import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  paperCalc: {
    margin: "6px",
    padding: "16px",
    height: "auto",
  },
  paperCalcMob: {
    margin: "6px",
    padding: "16px",
    marginTop: "32px",
    height: "auto",
  },
  box: {
    marginTop: "24px",
    padding: "16px",
    border: "1px solid #d3d3d3",
    borderRadius: "20px",
  },
  boxSpace: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "16px",
  },
  boxRow: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    marginLeft: "8px",
    cursor: "pointer",
  },
}));

export default useStyles;
