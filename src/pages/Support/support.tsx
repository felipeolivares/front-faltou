import React from "react";
import { Box, Paper } from "@material-ui/core";
import { Typography } from "@mui/material";
import useStyles from "./styles";
import Header from "../../pages/Header/header";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Support: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Paper elevation={3} className={classes.container}>
        <Typography
          variant="h4"
          fontWeight="bold"
          display="flex"
          justifyContent="center"
          marginTop="16px"
        >
          Suporte ou sugestões:
        </Typography>
        <Box className={classes.box}>
          <EmailIcon color="primary" />
          <Typography
            variant="body1"
            fontWeight="bold"
            paddingRight="4px"
            paddingLeft="8px"
          >
            E-mail:
          </Typography>
          <Typography variant="body1">felipeolivares99@hotmail.com</Typography>
        </Box>
        <Box className={classes.box}>
          <GitHubIcon />
          <Typography
            variant="body1"
            fontWeight="bold"
            paddingRight="4px"
            paddingLeft="8px"
          >
            GitHub:
          </Typography>
          <Typography variant="body1">
            https://github.com/felipeolivares
          </Typography>
        </Box>
        <Box className={classes.box}>
          <LinkedInIcon color="primary" />
          <Typography
            variant="body1"
            fontWeight="bold"
            paddingRight="4px"
            paddingLeft="8px"
          >
            LinkedIn:
          </Typography>
          <Typography variant="body1">
            https://www.linkedin.com/in/felipe-olivares-campos-977a5a148/
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default Support;
