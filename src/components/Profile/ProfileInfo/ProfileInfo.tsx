import classes from './ProfileInfo.module.css'



export function ProfileInfo() {
    return (
        <div>
            <img src="https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png"
                  alt='main'/>

            <div className={classes.block}>
                ava + descr
            </div>
        </div>
    )
}