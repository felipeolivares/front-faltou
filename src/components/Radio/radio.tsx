import React from "react";
import FormControl from "@mui/material/FormControl";
import { FormControlLabel, RadioGroup, Typography, Radio } from "@mui/material";

export interface RadioProps {
  labelId?: string;
  defaultValue?: string;
  name?: string;
  value?: string;
  value1Radio?: string;
  value2Radio?: string;
  handleChange?: any;
}

const MLRadio: React.FC<RadioProps> = ({ ...Props }) => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby={Props.labelId}
        defaultValue={Props.defaultValue}
        name={Props.name}
        value={Props.value}
        onChange={Props.handleChange}
      >
        <FormControlLabel
          value={Props.value1Radio}
          control={<Radio />}
          label={
            <Typography
              fontFamily="'NotoSans', Arial, Helvetica, sans-serif"
              fontSize="14px"
              color="#333333"
            >
              {Props.value1Radio}
            </Typography>
          }
        />
        <FormControlLabel
          value={Props.value2Radio}
          control={<Radio />}
          label={
            <Typography
              fontFamily="'NotoSans', Arial, Helvetica, sans-serif"
              fontSize="14px"
              color="#333333"
            >
              {Props.value2Radio}
            </Typography>
          }
        />
      </RadioGroup>
    </FormControl>
  );
};

export default MLRadio;
