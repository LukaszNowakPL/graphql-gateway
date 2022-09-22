import React from "react";
import { useAirportInfo } from "../../hooks/useAirportInfo";
import { useParams } from "react-router-dom";
import { Loader } from "../../../../components/Loader/Loader";
// @ts-ignore
import { Table } from "agnostic-react";
import { getTableRows } from "./InfoTable.helpers";

export const InfoTable: React.FC = () => {
  const { airportId } = useParams<{ seoPart: string; airportId: string }>();
  const { data, loading } = useAirportInfo(Number(airportId));

  if (loading || !data) {
    return <Loader />;
  }

  const rows = getTableRows(data.airport);

  return (
    <Table
      isStriped={false}
      isBorderless={true}
      headers={headers}
      rows={rows}
    />
  );
};

const headers = [
  {
    key: "key",
    width: "20%"
  },
  {
    key: "data",
    width: "80%"
  }
];
