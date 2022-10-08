import React from "react";
import { Loader } from "../../../../components/Loader/Loader";
import { useCountriesList } from "../../hooks/useCountriesList";
// @ts-ignore
import { Select } from "agnostic-react";
import { useFormContext, Controller } from "react-hook-form";
import { AddAirlineInputs } from "../AddAirlineForm/AddAirlineForm.types";

export const AirlineCountry: React.FC = () => {
  const { data, loading } = useCountriesList();
  const { control } = useFormContext<AddAirlineInputs>();

  if (loading || !data) {
    return <Loader />;
  }

  return (
    <Controller
      name="country"
      control={control}
      render={({ field, fieldState: {error } }) => (
          <>
            <Select
              {...field}
              options={data}
              defaultOptionLabel={
                "Select country of registration of the airline"
              }
            />
              {error?.message && <p>{error.message}</p>}
          </>
        )
      }
    />
  );
};
