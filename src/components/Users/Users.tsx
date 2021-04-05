import React from 'react';
import {UsersDataProps} from "../../redux/UsersReducer";
import classes from './Users.module.css'
import axios from "axios";
import photo from '../../assets/img/avatar-icon.png'

type UsersProps = {
    usersData: UsersDataProps
    followHandler: (userId: string) => void
    setUsersHandler: (users: UsersDataProps) => void
}


export const Users = (props: UsersProps) => {

    if (props.usersData.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsersHandler(response.data.items)
            })

    }
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