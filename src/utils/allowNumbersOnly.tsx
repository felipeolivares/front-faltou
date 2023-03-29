const allowNumbersOnly = (value: string) => {
  if (!value) {
    return "";
  }
  return value.replace(/[^0-9]/g, "");
};

export default allowNumbersOnly;
