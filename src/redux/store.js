import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Привет', lickesCount: 10},
                {id: 2, message: 'Привет, как дела?', lickesCount: 16},
                {id: 3, message: 'Все отлично', lickesCount: 8},
                {id: 4, message: 'Привет мир', lickesCount: 5},
                {id: 5, message: 'Yo', lickesCount: 15}
            ],
            newPostText: 'social-network.ru'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Aleksandr'},
                {id: 3, name: 'Ekaterina'},
                {id: 4, name: 'Sergey'},
                {id: 5, name: 'Olga'},
                {id: 6, name: 'Paul'}
            ],
            messages: [
                {id: 1, message: 'Привет'},
                {id: 2, message: 'Привет, как дела?'},
                {id: 3, message: 'Все отлично'},
                {id: 4, message: 'Привет мир'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
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
// store - OOP