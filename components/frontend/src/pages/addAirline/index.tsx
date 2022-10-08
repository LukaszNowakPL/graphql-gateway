import React from "react";
import { AddAirlineForm } from "./components/AddAirlineForm/AddAirlineForm";

export const AddAirlinePage: React.FC = () => {
  return (
    <>
      <h2>Add airline to the database</h2>
      <AddAirlineForm />
    </>
  );
};
