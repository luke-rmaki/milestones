import  clipboard  from 'https://deno.land/x/clipboard/mod.ts';
import { calculateDates } from "./lib/calculateDates.ts";
import { parseArgs } from "./lib/parseArgs.ts";

function main() {
  const date = parseArgs();
  if (!date) return;
  const {oneMonth, threeMonths, sixMonths, twelveMonths} = calculateDates(date);
  const output = `
  One month: ${oneMonth}
  Three months: ${threeMonths}
  Six months: ${sixMonths}
  Twelve months: ${twelveMonths}
  `;
  console.log(output);
  clipboard.writeText(output);
}

main();
