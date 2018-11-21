import { IAction, IActionTypes } from "../modal";
import { getUser } from "./actions";

export function AppReducer(currentState: any, action: IAction, store: any) {
  switch (action.type) {
    case IActionTypes.UPDATE_LANG:
      return { ...currentState, lang: action.payload };
    case IActionTypes.GET_USER:
      getUser(action.payload, store);
      return currentState;
    case IActionTypes.USER_RECIEVED:
      return { ...currentState, user: action.payload };
  }
}
