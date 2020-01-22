export default function daysBetweenTwoDates(date1: Date, date2: Date) {
  const dayInMs = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((date1.getTime() - date2.getTime()) / dayInMs));
}
