import { types } from './types';

const initialState = [];

export const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_POSTS:
            return action.payload
        default: return state;
    }
}