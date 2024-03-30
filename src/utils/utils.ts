import { type FrontmatterType } from "../types";

const getOrdinal = (number: number) => {
  // ordinals map
  const ordinals = {
    1: "st",
    2: "nd",
    3: "rd",
    11: "th",
    12: "th",
    13: "th",
  };

  // check for individual first

  if (ordinals[number] !== undefined) {
    return `${number}${ordinals[number]}`;
  } else {
    //  convert number to string
    let stringified = String(number);

    // check if the number entered is only one digit

    if (stringified.length < 2) {
      return ordinals[stringified] !== undefined
        ? `${stringified}${ordinals[stringified]}`
        : `${stringified}th`;
    }

    // break up the new string into parts
    let sliced = stringified.slice(0, -1);
    let lastChar = stringified.slice(-1);
    // take the last part and map it to an ordinal and join together
    return ordinals[lastChar] !== undefined
      ? `${sliced}${lastChar}${ordinals[lastChar]}`
      : `${sliced}${lastChar}th`;
  }
};

const MONTHS = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
};

export const humanDate = (date: Date) => {
  let ordinal = getOrdinal(date.getDate());
  let month = date.getMonth();
  let year = date.getFullYear();

  return `${MONTHS[month]} ${ordinal}, ${year}`;
};

export const sortPosts = (posts: FrontmatterType[]) => {
  return posts.sort(
    (a: any, b: any) => a.data.publishDate - b.data.publishDate
  );
};
