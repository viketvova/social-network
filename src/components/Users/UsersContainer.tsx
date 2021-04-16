import {connect} from "react-redux";
// import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followHandler,
    InitialStateType,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsersHandler,
    UsersDataProps
} from "../../redux/UsersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

type UsersProps = {
    usersData: UsersDataProps
    followHandler: (userId: string) => void
    setUsersHandler: (users: UsersDataProps) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
}

class AllUsersContainer extends React.Component<UsersProps> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsersHandler(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersHandler(response.data.items)
                this.props.setIsFetching(false)
            })
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    usersData={this.props.usersData}
                    followHandler={this.props.followHandler}
                />
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export const UsersContainer = connect(mapStateToProps, {
    followHandler,
    setUsersHandler,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
})(AllUsersContainer);

