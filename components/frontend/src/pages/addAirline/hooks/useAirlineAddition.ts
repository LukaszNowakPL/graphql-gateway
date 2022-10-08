import { useMutation } from "@apollo/client";
import { GetCountriesListQuery } from "../../../generated/graphql";
import { addAirlineMutation } from "../utils/mutations";
import { useState } from "react";

export const useAirlineAddition = () => {
  const [isError, setIsError] = useState<boolean>();
  const [isSuccess, setIsSuccess] = useState<boolean>();
  const [addAirline, { loading }] = useMutation<GetCountriesListQuery>(
    addAirlineMutation,
    {
      onCompleted: () => {
        setIsSuccess(true);
      },
      onError: () => {
        setIsError(true);
      }
    }
  );

  return {
    addAirline,
    loading,
    isError,
    isSuccess
  };
};
