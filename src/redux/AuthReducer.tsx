type SetUserDataType = {
    type: 'SET_USER_DATA',
    data: {
        email: string,
        id: number
        login: string
    }
}

export type InitialStateType = {
    userId: null | number,
    email: null | string
    login: null | string
    isAuth: boolean
}
const SET_USER_DATA = 'SET_USER_DATA'


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

}
const authReducer = (state: InitialStateType = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state

    }
}

export const setAuthUserData = (email: string, id: number, login: string): SetUserDataType => ({
    type: SET_USER_DATA,
    data: {
        email,
        id,
        login
    }
})
export default authReducer