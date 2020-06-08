import {InferActionsType} from "./redux-store";

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Aleksandr'},
        {id: 3, name: 'Ekaterina'},
        {id: 4, name: 'Sergey'},
        {id: 5, name: 'Olga'},
        {id: 6, name: 'Paul'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Привет, как дела?'},
        {id: 3, message: 'Все отлично'},
        {id: 4, message: 'Привет мир'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Как успехи?'}
    ] as Array<MessageType>
}

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/DIALOGS/SEND_MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const actions = {
    sendMessage: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody} as const)
}

export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>