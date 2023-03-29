const ptBRStringToDate = (stringDate: string) => {
  if (!stringDate) {
    return "";
  }
  const splittedDate = stringDate.split("/");
  const day = Number(splittedDate[0]);
  const month = Number(splittedDate[1]);
  const year = Number(splittedDate[2]);

  return year + "-" + month + "-" + day;
};

export default ptBRStringToDate;
