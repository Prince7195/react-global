import * as React from "react";
import * as ReactDOM from "react-dom";
import { Store, AppReducer } from "./store";

class BaseApp extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      lang: "en"
    };
  }
  componentDidMount() {
    const self = this;
    const store = Store.getStore();
    store.listen((action: any) => {
      self.setState(AppReducer(self.state, action, store));
    });
  }
  render() {
    return (
      <>
        <div>Hello, Welcome to React Ts Hell.</div>
        <div>My Current Lang = {this.state.lang}</div>
      </>
    );
  }
}

ReactDOM.render(<BaseApp />, document.getElementById("apps"));
