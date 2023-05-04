import { Reducer } from "react";
import { UiState } from "../../contexts/UiContext/types";
import { UiAction, UiActionsType } from "../../actions/ui/types";

const uiReducer: Reducer<UiState, UiAction> = (
  currentUiStore,
  action
): UiState => {
  if (action.type === UiActionsType.showLoading) {
    return {
      ...currentUiStore,
      isLoading: true,
    };
  }

  return currentUiStore;
};

export default uiReducer;
