import React from 'react';
import {UsersDataProps} from "../../redux/UsersReducer";
import classes from './Users.module.css'
import {v1} from "uuid";

type UsersProps = {
    usersData: UsersDataProps
    followHandler: (userId: string) => void
    setUsersHandler: (users: UsersDataProps) => void
}


export const Users = (props: UsersProps) => {

    return (
        <div>
            Users here!
            {
                props.usersData.map(elem => {
                    const onClickHandler = () => {
                        props.followHandler(elem.id)
                    }
                    return (
                        <div key={elem.id}>
                            <span>
                                <div>
                                    <img src={elem.img} className={classes.userPhoto} alt={elem.name}/>
                                </div>
                                <div>
                                    <button onClick={onClickHandler}>{elem.follow ? 'Unfollow' : 'Follow'}</button>
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{elem.name}</div><div>{elem.text}</div>
                                </span>
                                <span>
                                    <div>{elem.location.country}</div><div>{elem.location.city}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }

        </div>
    )
}