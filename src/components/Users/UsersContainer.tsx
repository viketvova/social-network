import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    UsersDataProps
} from "../../redux/UsersReducer";
import {Users} from './Users';


type MapDispatchToPropsType = {
    followHandler: (userId: string) => void
    setUsersHandler: (users: UsersDataProps) => void
    setCurrentPage: (CurrentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}


let mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followHandler: (userId) => {
            dispatch(followAC(userId))
        },
        setUsersHandler: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

