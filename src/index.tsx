import * as React from "react";
import * as ReactDOM from "react-dom";
import { Home } from "./components/Home";
import { Users } from "./components/User";

class BaseApp extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <>
        <div>Hello, Welcome to React Ts Hell.</div>
        <Home />
        <hr/>
        <Users />
      </>
    );
  }
}

ReactDOM.render(<BaseApp />, document.getElementById("apps"));
