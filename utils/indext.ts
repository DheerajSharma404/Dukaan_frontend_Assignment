// create a function that will return a date in a formate day month year
// example  1 January 2021

export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const month = newDate.toLocaleString("default", { month: "long" });
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  return `${day} ${month} ${year}`;
};
