import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, InitialStateType, setUsersAC, UsersDataProps} from "../../redux/UsersReducer";
import {Users} from './Users';


type MapDispatchToPropsType = {
    followHandler: (userId: string) => void
    setUsersHandler: (users: UsersDataProps) => void
}


let mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        usersData: state.usersPage.usersData
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followHandler: (userId) => {
           dispatch(followAC(userId))
        },
        setUsersHandler: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

