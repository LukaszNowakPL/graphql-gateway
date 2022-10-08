import React from "react";
// @ts-ignore
import { Table, Alert } from "agnostic-react";
import { addAirlineSchema, getTableRows } from "./AddAirlineForm.helpers";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { AddAirlineInputs } from "./AddAirlineForm.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAirlineAddition } from "../../hooks/useAirlineAddition";

export const AddAirlineForm: React.FC = () => {
  const formMethods = useForm<AddAirlineInputs>({
    defaultValues: {},
    resolver: yupResolver(addAirlineSchema),
    mode: "onChange"
  });
  const { addAirline, isError, isSuccess } = useAirlineAddition();

  const onSubmit: SubmitHandler<AddAirlineInputs> = async data => {
    await addAirline({
      variables: {
        name: data.name,
        countryOfRegistration: data.country,
        aircrafts: data.aircrafts?.map(aircraft => Number(aircraft)) || []
      }
    });
  };
  const rows = getTableRows();

  return (
      <>
        {isError && <Alert type={'error'}>Airline has not been added to the db.</Alert>}
        {isSuccess && <Alert type={'success'}>Airline has been added to the db.</Alert>}
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <Table
          isStriped={false}
          isBorderless={true}
          headers={headers}
          rows={rows}
        />
      </form>
    </FormProvider>
        </>
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
