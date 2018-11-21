import { IActionTypes } from "../modal";

export function getUser(id: any, store: any) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res: any) => res.json())
        .then((data: any) => {          
            store.dispatch({
                type: IActionTypes.USER_RECIEVED,
                payload: data
            });
        });
};