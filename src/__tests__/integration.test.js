import moxios from "moxios";
import { testStore } from "../utils/testing";
import { fetchPosts } from "../redux/actions";

describe('fetchPosts action', () => {
    
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
        const expectedState = [{
            title: 'Test Title 1',
            body: 'Test Body'
        },{
            title: 'Test Title 2',
            body: 'Test Body'
        },{
            title: 'Test Title 3',
            body: 'Test Body'
        }];
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200, 
                response: expectedState
            })
        })

        return store.dispatch(fetchPosts())
        .then(() => {
            // console.log(store.getState())
            const newState = store.getState();
            // console.log(newState.postReducer.posts)
            expect(newState.postReducer.posts).toBe(expectedState);
        })
    })
})
