import React from "react";
import { Route, Routes } from "react-router-dom";
import { AirportsPage } from "../../pages/airports";
import { AirportPage } from "../../pages/airport";
import { AirportInfoPage } from "../../pages/airportInfo";
import { AirportRoutesPage } from "../../pages/airportRoutes";
import { AirportAirlinesPage } from "../../pages/airportAirlines";

export const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="airports" element={<AirportsPage />} />
      <Route path="airport/:seoPart-:airportId" element={<AirportPage />}>
        <Route path="" element={<AirportInfoPage />} />
        <Route path="routes" element={<AirportRoutesPage />} />
        <Route path="airlines" element={<AirportAirlinesPage />} />
      </Route>
      <Route path="" element={<h2>Welcome to Graphql gateway frontend</h2>} />
    </Routes>
  );
};
