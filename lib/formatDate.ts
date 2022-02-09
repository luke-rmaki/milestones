export function formatDate(date: Date) {
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  if (day < 10 && month < 10) {
    return `0${day}/0${month}/${year}`;
  }
  if (month < 10) {
    return `${day}/0${month}/${year}`;
  }

  if (day < 10) {
    return `0${day}/${month}/${year}`;
  }

  return `${day}/${month}/${year}`;
}
