import React from "react";
// @ts-ignore
import { Input } from "agnostic-react";
import { Controller, useFormContext } from "react-hook-form";
import { AddAirlineInputs } from "../AddAirlineForm/AddAirlineForm.types";

export const AirlineName: React.FC = () => {
  const {control} = useFormContext<AddAirlineInputs>();

  return (
    <Controller
      name="name"
      control={control}
      render={({ field, fieldState: {error} }) => (<Input
              {...field}
              isInvalid={Boolean(error)}
              invalidText={error?.message}
              value={field.value || ""}
              type={"text"}
              placeholder={"Enter airline's name"}
          />
      )}
    />
  );
};
