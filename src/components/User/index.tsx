import * as React from "react";
import { AppReducer, Store } from "../../store";

export class Users extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: "Vijay Deepak"
        };
    }
    componentDidMount() {
        const self = this;
        const store = Store.getStore();
        store.listen((action: any) => {
            self.setState(AppReducer(self.state, action, store));
        });
        console.log(this.state);
    }
    render() {
        return (
            <>
                <div>My Name = {this.state.name}</div>
                {
                    this.state.user ?
                        <div>
                            Current User = {this.state.user.name}
                        </div>
                        :
                        <></>
                }
            </>
        );
    }
}