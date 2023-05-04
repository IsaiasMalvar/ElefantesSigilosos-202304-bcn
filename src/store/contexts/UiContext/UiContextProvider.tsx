import { PropsWithChildren } from "react";
import UiContext from "./UiContext";
import { UiContextStructure } from "./types";

const UiContextProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const uiStore: UiContextStructure = {
    uiState: {
      isLoading: false,
    },
  };

  return <UiContext.Provider value={uiStore}>{children}</UiContext.Provider>;
};

export default UiContextProvider;
