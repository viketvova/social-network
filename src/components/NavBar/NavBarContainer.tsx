import {NavBar} from "./NavBar";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {SidebarProps} from "../../redux/SidebarReducer";


type MapStateToPropsType = {
    sidebar: SidebarProps
}
type MapDispatchToPropsType = {}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return(
        {
            sidebar: state.sidebar
        }
    )
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return(
        {

        }
    )
}

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)

export default NavBarContainer

