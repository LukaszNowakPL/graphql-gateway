import React from "react";
// @ts-ignore
import { Button } from "agnostic-react";
import { useFormContext } from "react-hook-form";
import { AddAirlineInputs } from "../AddAirlineForm/AddAirlineForm.types";

export const SendButton: React.FC = () => {
  const {
    formState: { isValid, isSubmitting, isSubmitSuccessful }
  } = useFormContext<AddAirlineInputs>();

  return (
    <Button
      type={"submit"}
      isDisabled={!isValid || isSubmitting || isSubmitSuccessful}
    >
      Submit
    </Button>
  );
};
