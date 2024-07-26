export function timeDiffFromNow(futureDateStr: string) {
  const futureDate = new Date(futureDateStr);
  const now = new Date();
  const diffInMillis = +futureDate - +now;
  if (diffInMillis < 0 || isNaN(diffInMillis)) {
    return {days: 0, hours: 0, minutes: 0, seconds: 0};
  }

  const seconds = Math.floor((diffInMillis / 1000) % 60);
  const minutes = Math.floor((diffInMillis / 1000 / 60) % 60);
  const hours = Math.floor((diffInMillis / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diffInMillis / (1000 * 60 * 60 * 24));

  return {days, hours, minutes, seconds};
}