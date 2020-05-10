import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Привет', likesCount: 10},
        {id: 2, message: 'Привет, как дела?', likesCount: 16},
        {id: 3, message: 'Все отлично', likesCount: 8},
        {id: 4, message: 'Привет мир', likesCount: 5},
        {id: 5, message: 'Yo', likesCount: 15}
    ]
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("social-network.ru");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);

});

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("social-network.ru");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe("social-network.ru");
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});


