export const convertToISO8601 = (inputTime: string): string => {
  const parseDate = (dateStr: string): Date => {
    const [datePart, timePart, period] = dateStr.split(" ");
    const [day, month, year] = datePart.split("-").map(Number);
    let [hours, minutes] = timePart.split(":").map(Number);

    if (period.toLowerCase() === "pm" && hours !== 12) {
      hours += 12;
    }
    if (period.toLowerCase() === "am" && hours === 12) {
      hours = 0;
    }

    return new Date(Date.UTC(year, month - 1, day, hours, minutes));
  };

  const date = parseDate(inputTime);
  return date.toISOString();
};
