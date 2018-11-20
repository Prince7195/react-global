import { IAction, IActionTypes } from "../modal";

export function AppReducer(currentState: any, action: IAction, gStore: any) {
  switch (action.type) {
    case IActionTypes.UPDATE_LANG:
      // gStore.dispatch(action);
      return { ...currentState, lang: action.payload };
  }
}
