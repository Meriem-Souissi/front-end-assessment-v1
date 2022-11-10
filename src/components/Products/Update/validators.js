import { timestampToDays } from "../../../utils";

export const isNameValid = (value) => {
  return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
  return value.length > 0 && value.length <= 5;
};

export const isDateExpirationValid = (value) => {
  if (value) {
    const difference =
      timestampToDays(Date.parse(value)) - timestampToDays(Date.now());
    return difference >= 30;
  }
};
