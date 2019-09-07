export const getMonthNameFromUrl = (url: string) => {
  const splitStringAtUnderscore = url.split("-");
  const splitStringAtJpg = splitStringAtUnderscore[1].split(".jpg");
  return splitStringAtJpg[0];
};
