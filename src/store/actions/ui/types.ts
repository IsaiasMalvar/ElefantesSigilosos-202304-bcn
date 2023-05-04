export enum UiActionsType {
  showLoading,
  hideLoading,
  test,
}

export interface UiAction {
  type: UiActionsType;
}

export interface ShowLoadingAction extends UiAction {
  type: UiActionsType.showLoading;
}
