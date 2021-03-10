import {rerenderEntireTree} from "../render";

type DialogsDataProps = { id: number, name: string }[]
type MessageDataProps = { id: number, text: string }[]
type PostsDataProps = { id: number, text: string, likes: number }[]
type SidebarProps = { id: number, name: string, image: string }[]
type ProfilePageProps = { postsData: PostsDataProps }
type MessagesPageProps = { messageData: MessageDataProps, dialogsData: DialogsDataProps }
type StateProps = {
    profilePage: ProfilePageProps,
    dialogsPage: MessagesPageProps,
    sidebar: SidebarProps
}

let state: StateProps = {
    profilePage: {
        postsData: [
            {id: 1, text: 'Hi, how r u?', likes: 15},
            {id: 2, text: 'Fine, thank', likes: 10},
            {id: 3, text: 'Fine, and u?', likes: 1},
        ],
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
        {id: 1, name: 'Andy', image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png'},
        {id: 2, name: 'Mary', image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png'},
        {id: 3, name: 'Tony', image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png'},
    ]
}

export function onChangeHandler(event: string): void {
    let newPost = {
        id: 4,
        text: event,
        likes: 0
    }
    state.profilePage.postsData.push(newPost)
    rerenderEntireTree(state)
}

export function changeMessage(event: string): void {
    let newMessage = {
        id: 12,
        text: event,
    }
    state.dialogsPage.messageData.push(newMessage)
    rerenderEntireTree(state)
}

export default state;
