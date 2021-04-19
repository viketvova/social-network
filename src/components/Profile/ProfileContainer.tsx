import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile, SetUserProfileType} from "../../redux/ProfileReducer";
import {AppStateType} from "../../redux/redux-store";

type PropsType = {
    profile:  null | ProfileType
    setUserProfile: (profile:  null | ProfileType) => SetUserProfileType
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)