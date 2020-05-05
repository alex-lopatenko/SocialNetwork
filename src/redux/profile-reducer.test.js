import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Привет', likesCount: 10},
        {id: 2, message: 'Я закончил курсы по React', likesCount: 16},
        {id: 3, message: 'Yo', likesCount: 8},
        {id: 4, message: 'Круто', likesCount: 5},
        {id: 5, message: 'Поздравляю', likesCount: 15}
    ]
};

it('length of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("Page SocialNetwork");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});


it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("Page SocialNetwork");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe("Page SocialNetwork");
});

it('after deleting length of message should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});