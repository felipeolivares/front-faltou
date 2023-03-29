import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { Grid } from "@material-ui/core";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { StyledEngineProvider } from "@mui/material/styles";
export interface SelectProps {
  selectItems?: any;
  id?: string;
  name?: string;
  labelId?: string;
  label?: string;
  value?: any;
  handleChange?: any;
  handleBlur?: any;
  error?: any;
  className?: any;
  required?: boolean;
}

const MLSelect: React.FC<SelectProps> = ({ required = false, ...Props }) => {
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <Grid container xs={12} item direction="column">
          <FormControl
            className={Props.className}
            error={Props.error}
            required={required}
          >
            <InputLabel id={Props.labelId}>{Props.label}</InputLabel>
            <Select
              id={Props.id}
              name={Props.name}
              label={Props.label}
              displayEmpty={true}
              labelId={Props.labelId}
              value={Props.value}
              onChange={Props.handleChange}
              onBlur={Props.handleBlur}
            >
              {Props.selectItems &&
                Props.selectItems.map((item: any, key: any) => {
                  return (
                    <MenuItem value={item.value} key={key} divider={true}>
                      {item.title != "" && item.title}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Grid>
      </StyledEngineProvider>
    </React.Fragment>
  );
};

export default MLSelect;
