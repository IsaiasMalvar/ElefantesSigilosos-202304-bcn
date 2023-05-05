import { UiAction } from "../../actions/ui/types";

export interface UiState {
  isLoading: boolean;
}

export interface UiContextStructure {
  uiState: UiState;
  dispatch: React.Dispatch<UiAction>;
}
