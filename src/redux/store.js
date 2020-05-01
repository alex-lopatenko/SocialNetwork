import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Привет', lickesCount: 10},
                {id: 2, message: 'Я закончил курсы по React', lickesCount: 16},
                {id: 3, message: 'Yo', lickesCount: 8},
                {id: 4, message: 'Круто', lickesCount: 5},
                {id: 5, message: 'Поздравляю', lickesCount: 15}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Aleksei'},
                {id: 2, name: 'Aleksandr'},
                {id: 3, name: 'Dmitry'},
                {id: 4, name: 'Sregey'},
                {id: 5, name: 'Oksana'},
                {id: 6, name: 'Ekaterina'}
            ],
            messages: [
                {id: 1, message: 'Привет'},
                {id: 2, message: 'Я закончил курсы по React'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Круто'},
                {id: 5, message: 'Поздравляю'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;