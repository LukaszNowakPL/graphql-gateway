import React from "react";
// @ts-ignore
import { Loader as UiLoader } from "agnostic-react";
import { loaderContainer } from "./Loader.styles";

export const Loader: React.FC = () => {
  return (
    <div className={loaderContainer}>
      <UiLoader size={"xlarge"} />
    </div>
  );
};
