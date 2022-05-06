import dayjs from "dayjs";
export const hourMonth = (date) => {
  const dateFormatted = dayjs(date).format("HH:mm a | MMM Do");
  return dateFormatted;
};
