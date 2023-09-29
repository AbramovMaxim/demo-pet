let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: "15" },
                { id: 2, message: "It's my first post", likesCount: "21" },
            ],
            newPostText: "введите текст"
        },
        dialogsPage: {
            messages: [
                { id: 1, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit." },
                { id: 2, message: "Autem nesciunt repellat exercitationem veritatis, ipsum, soluta laboriosam beatae quam numquam laborum ab?" },
                { id: 3, message: "Cupiditate illo optio neque sed distinctio. Laudantium,voluptatum esse?" },
            ],
            newMessageText: 'введите текст',
            dialogs: [
                { id: 1, name: "Vova" },
                { id: 2, name: "Slava" },
                { id: 3, name: "Danil" },
                { id: 4, name: "Ivan" },
                { id: 5, name: "Cat" },
            ],
        },
    },
    _callSubscriber() { },


    getState() { return this._state; },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)

        } else if (action.type === 'ADD-MESSAGE') {
            let newPost = {
                id: this._state.dialogsPage.messages.length + 1,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newPost)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}

export default store;
window.store = store;