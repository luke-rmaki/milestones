import { formatDate } from "./formatDate.ts";

export function calculateDates(date: Date) {
  const oneMonth = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
  );
  const threeMonths = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDay(),
  );
  const sixMonths = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDay(),
  );
  const twelveMonths = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDay(),
  );

  oneMonth.setDate(date.getUTCDate() + 28);
  
  threeMonths.setDate(date.getDate() + 84);
  
  sixMonths.setDate(date.getDate() + 168);
  
  twelveMonths.setDate(date.getDate() + 336);

  return {
    oneMonth: formatDate(oneMonth),
    threeMonths: formatDate(threeMonths),
    sixMonths: formatDate(sixMonths),
    twelveMonths: formatDate(twelveMonths),
  }
}
