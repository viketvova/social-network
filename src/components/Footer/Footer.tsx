import classes from './Footer.module.css';

export function Footer() {
    return (
        <footer className={classes.footer}>Все права защищены 2019-2021.
            <div>
                <a href="#footer" className={classes.new}>Напишите нам</a>
            </div>
        </footer>
    )
}