import * as React from "react";
import { AppReducer, Store } from "../../store";

export class Home extends React.Component<any, any> {
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
                <div>My Current Lang = {this.state.lang}</div>
            </>
        );
    }
}