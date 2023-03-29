import { useMediaQuery, useTheme } from "@mui/material";

const isMobile = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  return smDown;
};

export default isMobile;
