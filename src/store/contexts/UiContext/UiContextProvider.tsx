import { PropsWithChildren, useMemo, useReducer } from "react";
import UiContext from "./UiContext";
import { UiContextStructure } from "./types";
import uiReducer from "../../reducers/ui/uiReducer";

const UiContextProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [state, dispatch] = useReducer(uiReducer, { isLoading: false });

  const uiStore: UiContextStructure = useMemo(
    () => ({
      uiState: state,
      dispatch,
    }),
    [state]
  );

  return <UiContext.Provider value={uiStore}>{children}</UiContext.Provider>;
};

export default UiContextProvider;
