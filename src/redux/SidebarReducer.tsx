import { v1 } from "uuid";
import {
  SidebarProps
} from "./store";


type SidebarReducerType = (state: SidebarProps, action: any) => SidebarProps

    let initialState: SidebarProps = [
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


const sidebarReducer: SidebarReducerType = (state = initialState, action: any): SidebarProps => {

    return state
}
export default sidebarReducer