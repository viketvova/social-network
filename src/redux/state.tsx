export type DialogsDataProps = { id: number, name: string }[]
export type MessageDataProps = { id: number, text: string }[]
export type PostsDataProps = { id: number, text: string, likes: number }[]
export type SidebarProps = { id: number, name: string, image: string }[]
export type NewPostTextProps = string
export type ProfilePageProps = { postsData: PostsDataProps, newPostText: NewPostTextProps }
export type MessagesPageProps = { messageData: MessageDataProps, dialogsData: DialogsDataProps }
export type OnChangeHandlerProps = () => void
export type ChangeMessageProps = (event: string) => void
export type UpdateNewPostTextProps = (newPostText: string) => void

export type StateProps = {
    profilePage: ProfilePageProps,
    dialogsPage: MessagesPageProps,
    sidebar: SidebarProps
}

export type StoreProps = {
    _state: StateProps,
    _callSubscriber: (event: StateProps) => void,
    getState: () => StateProps
    subscribe: (observer: (StateProps) => void) => void
    dispatch: (DispatchType) => void
}

export type DispatchType = (action: OnClickHandlerActionCreatorType | OnPostChangeActionCreatorType | ChangeMessageTypeActionCreatorType) => void
type OnClickHandlerActionCreatorType = () => OnChangeHandlerType
type OnPostChangeActionCreatorType = (text: string) => UpdateNewPostTextType
type ChangeMessageTypeActionCreatorType = (text: string) => ChangeMessageType

type OnChangeHandlerType = {
    type: 'ONCHANGE-HANDLER',
}

type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

type ChangeMessageType = {
    type: 'CHANGE-MESSAGE',
    event: string
}

const ONCHANGE_HANDLER = 'ONCHANGE-HANDLER';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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

    // onChangeHandler(): void {
    //     let newPost = {
    //         id: 4,
    //         text: this._state.profilePage.newPostText,
    //         likes: 0
    //     }
    //     this._state.profilePage.postsData.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber(this._state)
    // },
    // changeMessage(event: string): void {
    //     let newMessage = {
    //         id: 12,
    //         text: event,
    //     }
    //     this._state.dialogsPage.messageData.push(newMessage)
    //     this._callSubscriber(this._state)
    // },
    // updateNewPostText(newPostText: string): void{
    //     this._state.profilePage.newPostText = (newPostText)
    //     this._callSubscriber(this._state)
    // },
    dispatch(action) {
        if (action.type === ONCHANGE_HANDLER) {
            let newPost = {
                id: 4,
                text: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === CHANGE_MESSAGE) {
            let newMessage = {
                id: 12,
                text: action.event,
            }
            this._state.dialogsPage.messageData.push(newMessage)
            this._callSubscriber(this._state)
        }
    }

}

export const onClickHandlerActionCreator = (): OnChangeHandlerType => ({type: ONCHANGE_HANDLER})
export const onPostChangeActionCreator = (text: string): UpdateNewPostTextType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const changeMessageActionCreator = (text: string): ChangeMessageType => ({type: CHANGE_MESSAGE, event: text})

export default store;
