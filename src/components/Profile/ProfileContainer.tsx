import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/ProfileReducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from 'react-router-dom'
import {RouteComponentProps} from "react-router";

type PathParamsType = {
    userId: string,
}
export type RouterPropsType = RouteComponentProps<PathParamsType> & {
    userId: string,
}

class ProfileContainer extends React.Component<RouterPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        !userId && (userId = 2)
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)