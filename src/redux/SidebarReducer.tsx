import {v1} from "uuid";


export type SidebarProps = { id: string, name: string, image: string }[]

let initialState = [
    {
        id: v1(),
        name: 'Andy',
        image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png'
    },
    {
        id: v1(),
        name: 'Mary',
        image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png'
    },
    {
        id: v1(),
        name: 'Tony',
        image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png'
    },
]
export type InitialStateType = typeof initialState

let sidebarReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    return state
}
 export default sidebarReducer