export const getAirportLink = ({
  id,
  iata,
  name
}: {
  id: number;
  iata: string;
  name: string;
}) => {
  return `${name} ${iata} ${id}`
    .split(" ")
    .map(element => element.replace(/[^a-z0-9]/gi, ""))
    .map(element => element.toLowerCase())
    .join("-");
};
