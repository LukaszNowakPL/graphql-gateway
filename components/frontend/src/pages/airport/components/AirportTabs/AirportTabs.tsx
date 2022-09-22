import React from "react";
// @ts-ignore
import { Button } from "agnostic-react";
import { Link } from "react-router-dom";
import { airportTabsContainer } from "./AirportTabs.styles";

export const AirportTabs: React.FC = () => {
  return (
    <div className={airportTabsContainer}>
      <Link to={""}>
        <Button isBordered>Info</Button>
      </Link>
      <Link to={"routes"}>
        <Button isBordered>Routes</Button>
      </Link>
      <Link to={"airlines"}>
        <Button isBordered>Airlines</Button>
      </Link>
    </div>
  );
};
