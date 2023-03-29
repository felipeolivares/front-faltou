import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "10px",
    background: "#E7B10A",
    boxShadow: "0 4px 6px -6px #222",
  },
  containerBack: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "4px",
    cursor: "pointer",
  },
  text: {
    color: "#000000",
    fontSize: "16px",
    fontFamily: "'NotoSans-Bold', Arial, Helvetica, sans-serif",
    fontWeight: "bold",
    paddingLeft: "5px",
  },
  imageBackIcon: {
    width: "24px",
    heigth: "24px",
    paddingTop: "4px",
    color: "#000000",
  },
  imageMenuItem: {
    width: "24px",
    heigth: "24px",
    paddingTop: "8px",
    color: "#000000",
  },
  boxProfile: {
    display: "flex",
    flexDirection: "row",
    cursor: "pointer",
  },
}));

export default useStyles;
