import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import {Friend} from "./Friend/Friend";
import { SidebarProps } from '../../redux/state';

type StateProps = {state: SidebarProps}

export function NavBar(props: StateProps) {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
            <div className={classes.friends}>
                <h3>Friends</h3>
                {
                    props.state.map(elem => <Friend key={elem.id} name={elem.name} image={elem.image} id={elem.id}/>)
                }

            </div>
        </nav>
    )
}
