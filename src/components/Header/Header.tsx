import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

export function Header (props: any) {
    return (
        <header className={classes.header}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt={'logo'}/>
            <div className={classes.loginBlock}>
                {
                    !props.isAuth ?
                        <NavLink to={'/login'}>Login</NavLink>
                        : 'free'
                }

            </div>
        </header>
    )
}