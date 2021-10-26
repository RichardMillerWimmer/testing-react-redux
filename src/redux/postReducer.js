import { types } from './types';

const initialState = {
    posts: []
};

export const postReducer = (state = initialState, action) => {
    // console.log(action)
    switch(action.type) {
        case types.GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default: return state;
    }
}