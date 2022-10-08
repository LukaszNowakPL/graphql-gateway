import React from "react";
import { Loader } from "../../../../components/Loader/Loader";
import { useAircraftsList } from "../../hooks/useAircraftsList";
// @ts-ignore
import { ChoiceInput } from "agnostic-react";
import { useFormContext, Controller } from "react-hook-form";
import { AddAirlineInputs } from "../AddAirlineForm/AddAirlineForm.types";

export const AirlineAircrafts: React.FC = () => {
  const { data, loading } = useAircraftsList();
  const { control } = useFormContext<AddAirlineInputs>();

  if (loading || !data) {
    return <Loader />;
  }

  return (
    <Controller
      name="aircrafts"
      control={control}
      render={({ field, fieldState: { error } }) => (<>
              <ChoiceInput
              {...field}
              type={"checkbox"}
              isInvalid={Boolean(error)}
              options={data}
              isFieldset={false}
          />
          {error?.message && <p>{error.message}</p>}
      </>
      )}
    />
  );
};
