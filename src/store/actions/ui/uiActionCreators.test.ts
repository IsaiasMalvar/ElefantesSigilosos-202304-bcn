import { UiActionsType } from "./types";
import { showLoadingActionCreator } from "./uiActionCreators";

describe("Given a function showLoadingActionCreator", () => {
  describe("When it is called", () => {
    test("Then it should return a show loading action", () => {
      const actionType = UiActionsType.showLoading;

      const showLoadingAction = showLoadingActionCreator();

      expect(showLoadingAction).toHaveProperty("type", actionType);
    });
  });
});
