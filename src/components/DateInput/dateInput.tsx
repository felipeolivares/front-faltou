import React from "react";
import InputMask from "react-input-mask";
import { SxProps, TextField } from "@mui/material";

export interface DateInputProps {
  value: string;
  onChange: any;
  onBlur: any;
  disabled?: boolean;
  error?: boolean;
  sx?: SxProps;
  required?: boolean;
  inputProps?: any;
  label: string;
  helperText?: string;
  placeholder?: string;
  name: string;
  id: string;
}

const DateInput: React.FC<DateInputProps> = ({ ...Props }) => {
  return (
    <InputMask
      mask="99/99/9999"
      value={Props.value}
      onChange={Props.onChange}
      onBlur={Props.onBlur}
      disabled={Props.disabled}
      alwaysShowMask={false}
      maskChar=""
    >
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      {(inputProps: any) => (
        <TextField
          {...inputProps}
          label={Props.label}
          variant="outlined"
          fullWidth
          name={Props.name}
          id={Props.id}
          error={Props.error}
          helperText={Props.helperText}
          placeholder={Props.placeholder}
          disabled={Props.disabled}
          autoComplete="off"
        />
      )}
    </InputMask>
  );
};

export default DateInput;
