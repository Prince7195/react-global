export enum IActionTypes {
  UPDATE_LANG = "UPDATE_LANG",
  GET_USER = "GET_USER",
  USER_RECIEVED = "USER_RECIEVED"
}

export interface IAction {
  type: IActionTypes;
  payload?: any;
  meta?: any;
}
