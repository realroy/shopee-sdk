export function toTimestamp(date?: Date) {
  const time = date ? date.getTime() : Date.now();

  return Math.round(time / 1_000).toString();
}