import { types } from '../redux/types';
import { postReducer } from '../redux/postReducer';

describe('postReducer Suite', () => {

    it('Should return default state = []', () => {
        const newState = postReducer(undefined, {});
        expect(newState).toEqual([])
    });

    it('Should return new state when receiveing type', () => {
        const posts = [{title: 'test1'}, {title: 'test2'}, {title: 'test3'}];
        const newState = postReducer(undefined, {type: types.GET_POSTS, payload: posts});
        expect(newState).toEqual(posts)
    })
})