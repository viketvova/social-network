import classes from "./Users.module.css";
import photo from "../../assets/img/avatar-icon.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {UsersDataProps} from "../../redux/UsersReducer";
import axios from "axios";

type UsersProps = {
    usersData: UsersDataProps
    followHandler: (userId: string) => void
    unFollowHandler: (userId: string) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}

export let Users = (props: UsersProps) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.splice(0, 10).map((page, index) => {
                        return (
                            <span
                                className={props.currentPage === page ? classes.selectedPage : ''}
                                key={index}
                                onClick={(e) => props.onPageChanged(page)}
                            >{page}</span>
                        )
                    })
                }
            </div>
            {
                props.usersData.map(elem => {
                    console.log(elem)
                    return (
                        <div key={elem.id}>
                            <span>
                                <div>
                                    <NavLink to={'./profile/' + elem.id}>
                                    <img src={elem.photos.small ? elem.photos.small : photo}
                                         className={classes.userPhoto} alt={elem.name}
                                    />
                                        </NavLink>
                                </div>
                                <div>
                                    {
                                        elem.followed
                                        ?<button onClick={() => {
                                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${elem.id}`, {
                                                    withCredentials: true,
                                                    headers: {'API-KEY': 'd6fa573c-41c6-4fab-93a0-f168585eaeeb'}
                                                })
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) props.unFollowHandler(elem.id)
                                                    })
                                            }}>Unfollow</button>
                                        :<button onClick={() => {
                                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${elem.id}`, {}, {
                                                    withCredentials: true,
                                                    headers: {'API-KEY': 'd6fa573c-41c6-4fab-93a0-f168585eaeeb'}
                                                })
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) props.followHandler(elem.id)
                                                    })
                                            }}>Follow</button>
                                    }

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