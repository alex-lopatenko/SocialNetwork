const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Как успехи?'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;