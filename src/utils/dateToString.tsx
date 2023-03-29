const dateToString = (date: string) => {
  if (!date || date === null) {
    return "";
  }
  const splittedDate = date.split("-");
  const splittedDay = splittedDate[2].split("T");
  const day = splittedDay[0];
  const month = splittedDate[1];
  const year = splittedDate[0];

  return day + "/" + month + "/" + year;
};

export default dateToString;
