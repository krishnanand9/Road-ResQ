export const isValidEmail = (
  email: string
): boolean => {
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email.trim());
};

export const isValidPhone = (
  phone: string
): boolean => {
  const phoneRegex = /^[6-9]\d{9}$/;

  return phoneRegex.test(phone.trim());
};

export const isValidPassword = (
  password: string
): boolean => {
  return password.length >= 6;
};

export const isRequired = (
  value: string
): boolean => {
  return value.trim().length > 0;
};

export const isValidVehicleNumber = (
  vehicleNumber: string
): boolean => {
  const cleanedNumber = vehicleNumber
    .trim()
    .toUpperCase();

  const vehicleNumberRegex =
    /^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{4}$/;

  return vehicleNumberRegex.test(cleanedNumber);
};

export const isValidVehicleYear = (
  year: number
): boolean => {
  const currentYear = new Date().getFullYear();

  return (
    Number.isInteger(year) &&
    year >= 1900 &&
    year <= currentYear + 1
  );
};