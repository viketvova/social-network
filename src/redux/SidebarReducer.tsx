import {
    ChangeMessageTypeActionCreatorType,
    OnChangeHandlerActionCreatorType,
    OnClickHandlerActionCreatorType, OnPostChangeActionCreatorType, SidebarProps
} from "./state";

type SidebarReducerType = (state: SidebarProps, action: OnClickHandlerActionCreatorType | OnPostChangeActionCreatorType | ChangeMessageTypeActionCreatorType | OnChangeHandlerActionCreatorType) => SidebarProps

const sidebarReducer:SidebarReducerType = (state, action) => {

    return state
}
export default sidebarReducer