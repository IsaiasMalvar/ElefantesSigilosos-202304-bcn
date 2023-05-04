import { showLoadingActionCreator } from "../../actions/ui/uiActionCreators";
import { UiState } from "../../contexts/UiContext/types";
import uiReducer from "./uiReducer";

describe("Given a uiReducer", () => {
  describe("When it receives a current uiStore and a showLoadingAction", () => {
    test("Then it should return the new uiStore with isLoading set to true", () => {
      const currentUiSate: UiState = {
        isLoading: false,
      };
      const expectedUiState: UiState = {
        isLoading: true,
      };

      const newUiState: UiState = uiReducer(
        currentUiSate,
        showLoadingActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
