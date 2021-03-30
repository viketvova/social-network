import React from "react";
import {NavBar} from "./NavBar";
import StoreContext from "../../StoreContext";


function NavBarContainer() {

    return (
        <StoreContext.Consumer>
            {store => {
                let state
                if (store) state = store.getState()
                return (
                    <NavBar sidebar={state.sidebar}/>
                )
            }}
        </StoreContext.Consumer>


    )
}

export default NavBarContainer
