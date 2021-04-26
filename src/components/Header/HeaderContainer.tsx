import {Header} from "./Header";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateType, setAuthUserData} from "../../redux/AuthReducer";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {

        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data
                    this.props.setAuthUserData(email, id, login)
                }
            })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}


const mapStateToProps = (state: AppStateType): InitialStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    userId: state.auth.isAuth
})


export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer)