import classes from './Header.module.css'

export function Header() {
    return (
        <header className={classes.header}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt={'logo'}/>
        </header>
    )
}