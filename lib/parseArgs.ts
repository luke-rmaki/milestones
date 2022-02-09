export function parseArgs(): Date | void {
  const { args } = Deno;
  const dateRegex = /\d\d\/\d\d\/\d\d\d\d/;

  if (args.length === 0) {
    console.log("Please supply an argument");
    return;
  }

  if (args.length > 1) {
    console.log("Too many arguments supplied");
    return;
  }

  if (!dateRegex.test(args[0])) {
    console.log("Please supply a valid date in the format DD/MM/YYYY");
    return;
  }

  const [day, month, year] = args[0].split("/");
  const date = new Date(parseInt(year), parseInt(month) - 1, 1);
  date.setDate(date.getDate() + parseInt(day));
  return date;
}
