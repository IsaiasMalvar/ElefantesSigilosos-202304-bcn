export enum UiActionsType {
  showLoading,
  hideLoading,
}

export interface UiAction {
  type: UiActionsType;
  payload?: unknown;
}

export interface ShowLoadingAction extends UiAction {
  type: UiActionsType.showLoading;
}
