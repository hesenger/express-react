export function log(data: string | any[]) {
  if (process.env.ENV === "production") return;
  console.log(new Date(), data);
}

export function logProduction(data: string | any[]) {
  console.log(new Date(), data);
}
