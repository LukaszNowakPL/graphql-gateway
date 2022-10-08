import React from "react";
import { AirlineName } from "../AirlineName/AirlineName";
import { AirlineCountry } from "../AirlineCountry/AirlineCountry";
import { AirlineAircrafts } from "../AirlineAircrafts/AirlineAircrafts";
import { SendButton } from "../SendButton/SendButton";
import * as yup from "yup";

export const getTableRows = () => {
  return [
    { key: "Name:", data: <AirlineName /> },
    { key: "Country:", data: <AirlineCountry /> },
    { key: "Aircrafts:", data: <AirlineAircrafts /> },
    { key: "", data: <SendButton /> }
  ];
};

export const addAirlineSchema = yup
  .object({
    name: yup.string().required("Airline name is required"),
    country: yup.number().required("Country selection is required"),
    aircrafts: yup
      .array()
      .min(1, "Aircraft type selection is required")
      .required("Aircraft type selection is required")
  })
  .required();
