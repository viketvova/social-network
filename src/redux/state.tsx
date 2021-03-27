import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";

export type DialogsDataProps = { id: number, name: string }[]
export type MessageDataProps = { id: number, text: string }[]
export type PostsDataProps = { id: number, text: string, likes: number }[]
export type SidebarProps = { id: number, name: string, image: string }[]
export type NewPostTextProps = string
export type NewDialogType = string
export type ProfilePageProps = { postsData: PostsDataProps, newPostText: NewPostTextProps }
export type MessagesPageProps = { messageData: MessageDataProps, dialogsData: DialogsDataProps, newDialog: NewDialogType }
export type OnChangeHandlerProps = () => void
export type ChangeMessageProps = (event: string) => void
export type UpdateNewPostTextProps = (newPostText: string) => void

export type StateProps = {
    profilePage: ProfilePageProps,
    dialogsPage: MessagesPageProps,
    sidebar: SidebarProps | any
}

export type StoreProps = {
    _state: StateProps,
    _callSubscriber: (event: StateProps) => void,
    getState: () => StateProps
    subscribe: (observer: (StateProps) => void) => void
    dispatch: (DispatchType) => void
}

export type DispatchType = (action: OnClickHandlerActionCreatorType | OnPostChangeActionCreatorType | ChangeMessageTypeActionCreatorType | OnChangeHandlerActionCreatorType) => void
export type OnClickHandlerActionCreatorType = () => OnChangeHandlerType
export type OnPostChangeActionCreatorType = (text: string) => UpdateNewPostTextType
export type ChangeMessageTypeActionCreatorType = () => ChangeMessageType
export type OnChangeHandlerActionCreatorType = (text: string) => OnChangeHandlerMessageType


export type OnChangeHandlerMessageType = {
    type: 'MESSAGE-HANDLER',
    newDialog: string
}

export type OnChangeHandlerType = {
    type: 'ONCHANGE-HANDLER',
}

export type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

export type ChangeMessageType = {
    type: 'CHANGE-MESSAGE',
 }

let store: StoreProps = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, text: 'Hi, how r u?', likes: 15},
                {id: 2, text: 'Fine, thank', likes: 10},
                {id: 3, text: 'Fine, and u?', likes: 1},
            ],
            newPostText: 'it-kam'
        },
        dialogsPage: {
            messageData: [
                {id: 1, text: 'Hi'},
                {id: 2, text: 'How r u?'},
                {id: 3, text: 'Fine, and u?'},
            ],
            dialogsData: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Mary'},
                {id: 3, name: 'Tony'},
                {id: 4, name: 'Ann'},
            ],
            newDialog: ''
        },
        sidebar: [
            {
                id: 1,
                name: 'Andy',
                image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png'
            },
            {
                id: 2,
                name: 'Mary',
                image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png'
            },
            {
                id: 3,
                name: 'Tony',
                image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png'
            },
        ]
    },
    _callSubscriber(event) {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store;
