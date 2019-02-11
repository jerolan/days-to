export function daysBetween(date1, date2) {
  const dayInMS = 1000 * 60 * 60 * 24;

  const date1InMs = date1.getTime();
  const date2InMs = date2.getTime();

  const differenceInMs = date2InMs - date1InMs;

  return Math.round(differenceInMs / dayInMS);
}