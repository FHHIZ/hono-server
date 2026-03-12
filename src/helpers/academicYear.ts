export function academicYearHelpers() {
  const T = new Date();
  const date = T.getDate();
  const month = T.getMonth();
  const year = T.getFullYear();

  let startYear;
  let endYear;
  if (month > 4 || (month == 4 && date >= 5)) {
    startYear = year;
    endYear = year + 1;
  } else {
    startYear = year - 1;
    endYear = year;
  }
  return `${startYear}/${endYear}`;
}
