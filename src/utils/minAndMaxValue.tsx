const minAndMaxValue = (value: string, min: number, max: number) => {
  if (min !== 0 && (!value || value === "0")) {
    value = "";
  }
  if (parseInt(value) && parseInt(value) > max) {
    const valueSplit = value.split("");
    value = valueSplit[0] + valueSplit[1];
  }
  return value;
};

export default minAndMaxValue;
