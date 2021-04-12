import React from 'react';
import {UsersDataProps} from "../../redux/UsersReducer";
import classes from './Users.module.css'
import axios from "axios";
import photo from '../../assets/img/avatar-icon.png'

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


export class Users extends React.Component<UsersProps> {

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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: Array<number> = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {
                        pages.map((page, index) => {
                            return (
                                <span
                                    className={this.props.currentPage === page ? classes.selectedPage : ''}
                                    key={index}
                                    onClick={(e) => this.onPageChanged(page)}
                                >{page}</span>
                            )
                        })
                    }
                </div>
                {
                    this.props.usersData.map(elem => {
                        const onClickHandler = () => {
                            this.props.followHandler(elem.id)
                        }
                        return (
                            <div key={elem.id}>
                            <span>
                                <div>
                                    <img src={elem.photos.small ? elem.photos.small : photo}
                                         className={classes.userPhoto} alt={elem.name}/>
                                </div>
                                <div>
                                    <button onClick={onClickHandler}>{elem.status ? 'Unfollow' : 'Follow'}</button>
                                </div>
                            </span>
                                <span>
                                <span>
                                    <div>{elem.name}</div><div>{elem.text}</div>
                                </span>
                                <span>
                                    <div>{'elem.location.country'}</div><div>{'elem.location.city'}</div>
                                </span>
                            </span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}