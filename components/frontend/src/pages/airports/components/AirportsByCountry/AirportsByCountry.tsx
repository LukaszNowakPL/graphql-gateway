import React from "react";
import { GetAirportsQuery } from "../../../../generated/graphql";
// @ts-ignore
import { Disclose, Table, Button } from "agnostic-react";
import { Link } from "react-router-dom";
import { getTableRows } from "./AirportsByCountry.helpers";
import { getAirportLink } from "../../../../utils/helpers";

interface AirportsByCountryProps {
  airports: GetAirportsQuery["airports"];
}

export const AirportsByCountry: React.FC<AirportsByCountryProps> = ({
  airports
}) => {
  const rows = getTableRows(airports);

  return (
    <Disclose title={<h3>{airports[0].country.name}</h3>}>
      <Table headers={headers} rows={rows} />
    </Disclose>
  );
};

const headers = [
  {
    label: "Name",
    key: "name",
    width: "40%"
  },
  {
    label: "Routes",
    key: "routes",
    width: "25%"
  },
  {
    label: "Airlines",
    key: "airlines",
    width: "25%"
  },
  {
    key: "link",
    // @ts-ignore
    renderFn: (key, value) => (
      <td key={key} style={{ textAlign: "center" }}>
        <Link to={`/airport/${getAirportLink(value)}`}>
          <Button isBordered>&gt;</Button>
        </Link>
      </td>
    )
  }
];
