import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";



export function ProfileInfo(props: any) {

    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <img src="https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png"
                  alt='main'/>

            <div className={classes.block}>
                <img src={props.profile.photos.large}
                     alt='main'/>
                ava + descr
            </div>
        </div>
    )
}