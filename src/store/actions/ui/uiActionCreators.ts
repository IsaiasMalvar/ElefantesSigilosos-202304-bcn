import { ShowLoadingAction, UiActionsType } from "./types";

export const showLoadingActionCreator = (): ShowLoadingAction => ({
  type: UiActionsType.showLoading,
});
