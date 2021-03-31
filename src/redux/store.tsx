import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";
import {v1} from "uuid";

type DialogsDataProps = { id: string, name: string }[]
type MessageDataProps = { id: string, text: string }[]
type PostsDataProps = { id: string, text: string, likes: number }[]
type SidebarProps = { id: string, name: string, image: string }[]
type NewPostTextProps = string
type NewDialogType = string
type ProfilePageProps = { postsData: PostsDataProps, newPostText: NewPostTextProps }
type MessagesPageProps = { messageData: MessageDataProps, dialogsData: DialogsDataProps, newDialog: NewDialogType }
type OnChangeHandlerProps = () => void

type StateProps = {
    profilePage: ProfilePageProps,
    dialogsPage: MessagesPageProps,
    sidebar: SidebarProps
}

type StoreProps = {
    _state: StateProps,
    _callSubscriber: (event: StateProps) => void,
    getState: () => StateProps
    subscribe: (observer: (StateProps) => void) => void
    dispatch: (DispatchType) => void
}

type OnChangeHandlerMessageType = {
    type: 'MESSAGE-HANDLER',
    newDialog: string
}

type OnChangeHandlerType = {
    type: 'ONCHANGE-HANDLER',
}

type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

type ChangeMessageType = {
    type: 'CHANGE-MESSAGE',
}

let store: StoreProps = {
    _state: {
        profilePage: {
            postsData: [
                {id: v1(), text: 'Hi, how r u?', likes: 15},
                {id: v1(), text: 'Fine, thank', likes: 10},
                {id: v1(), text: 'Fine, and u?', likes: 1},
            ],
            newPostText: 'it-kam'
        },
        dialogsPage: {
            messageData: [
                {id: v1(), text: 'Hi'},
                {id: v1(), text: 'How r u?'},
                {id: v1(), text: 'Fine, and u?'},
            ],
            dialogsData: [
                {id: v1(), name: 'Andrew'},
                {id: v1(), name: 'Mary'},
                {id: v1(), name: 'Tony'},
                {id: v1(), name: 'Ann'},
            ],
            newDialog: ''
        },
        sidebar: [
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

// export default store;
