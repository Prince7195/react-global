export enum IActionTypes {
  UPDATE_LANG = "UPDATE_LANG"
}

export interface IAction {
  type: IActionTypes;
  payload?: any;
  meta?: any;
}
