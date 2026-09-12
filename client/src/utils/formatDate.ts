export const formatDate = (
  date: string | Date
): string => {
  const dateObject = new Date(date);

  if (Number.isNaN(dateObject.getTime())) {
    return "Invalid date";
  }

  return dateObject.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const formatDateTime = (
  date: string | Date
): string => {
  const dateObject = new Date(date);

  if (Number.isNaN(dateObject.getTime())) {
    return "Invalid date";
  }

  return dateObject.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};