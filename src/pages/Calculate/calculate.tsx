import React from "react";
import { Box, Grid } from "@material-ui/core";
import { isMobile } from "utils";
import Header from "pages/Header/header";
import Form from "./Form/form";
import FormResponse from "./FormResponse/formResponse";

const Calculate: React.FC = () => {
  return (
    <>
      <Header />
      <Box className="container-box" display="flex">
        <Grid container>
          <Grid item xs={isMobile() ? 12 : 6}>
            <Form />
          </Grid>
          <Grid item xs={isMobile() ? 12 : 6}>
            <FormResponse />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Calculate;
