import React from "react";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import useStyles from "./styles";
import LogoutIcon from "@mui/icons-material/Logout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate, useLocation } from "react-router-dom";
import routes from "routes/routes";

const Header: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box className={classes.container} display="flex">
      <Box className={classes.containerBack} onClick={() => navigate(-1)}>
        <Box className={classes.imageBackIcon}>
          {location.pathname === routes.calculate ? (
            <LogoutIcon fontSize="small" />
          ) : (
            <ArrowBackIosIcon fontSize="small" />
          )}
        </Box>
        <Box className={classes.text}>
          {location.pathname === routes.calculate ? "Sair" : "Voltar"}
        </Box>
      </Box>
      <Typography variant="h6" fontWeight="bold" paddingTop="4px">
        POSSO FALTAR?
      </Typography>
      <Box
        className={classes.boxProfile}
        onClick={() => {
          if (location.pathname !== routes.support) {
            navigate(routes.support);
          }
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          paddingTop="4px"
          paddingRight="4px"
        >
          Ajuda
        </Typography>
        <SupportAgentIcon className={classes.imageMenuItem} />
      </Box>
    </Box>
  );
};

export default Header;
