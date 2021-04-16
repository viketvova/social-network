import classes from "./Users.module.css";
import photo from "../../assets/img/avatar-icon.png";
import React from "react";
import {UsersDataProps} from "../../redux/UsersReducer";

type UsersProps = {
    usersData: UsersDataProps
    followHandler: (userId: string) => void
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
                    const onClickHandler = () => {
                        props.followHandler(elem.id)
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