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
import React from "react";
import axios from "axios";
import {Users} from "./Users";


type MapDispatchToPropsType = {
    followHandler: (userId: string) => void
    setUsersHandler: (users: UsersDataProps) => void
    setCurrentPage: (CurrentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

type UsersProps = {
    usersData: UsersDataProps
    followHandler: (userId: string) => void
    setUsersHandler: (users: UsersDataProps) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

class AllUsersContainer extends React.Component<UsersProps> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersHandler(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersHandler(response.data.items)

            })
    }
    render() {

        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                usersData={this.props.usersData}
                followHandler={this.props.followHandler}

            />
        )
    }
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsersContainer);

