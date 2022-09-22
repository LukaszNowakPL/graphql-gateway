import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../../../components/Loader/Loader";
import { useAirportAirlines } from "../../hooks/useAirportAirlines";

export const InfoTable: React.FC = () => {
  const { airportId } = useParams<{ seoPart: string; airportId: string }>();
  const { data, loading } = useAirportAirlines(Number(airportId));

  if (loading || !data) {
    return <Loader />;
  }

  return (
    <>
      <h3>Airlines operating at the airport:</h3>
      <ul>
        {Object.entries(data).map(([airline, destinations]) => (
          <li key={airline}>
            {airline}: {destinations.join(", ")}
          </li>
        ))}
      </ul>
    </>
  );
};
