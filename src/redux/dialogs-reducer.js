const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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