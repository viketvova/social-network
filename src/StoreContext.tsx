import React from "react";
import { StoreProps } from "./redux/store";


type PropsType = {
    store: StoreProps
    children: React.ReactNode
}

const StoreContext = React.createContext<StoreProps | null>(null)

export const Provider = (props: PropsType) => {
    return  (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext