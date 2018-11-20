declare var window: any;

export class Store {
  static getStore() {
    return window.Store.GlobalListener;
  }
}
