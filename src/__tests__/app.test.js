import React, { Component } from "react";
import App from "../App";
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../utils/testing';

const setup = (initialState) => {
    const store = testStore(initialState);
    const component = shallow(<App store={store} />).childAt(0).dive();
    // console.log(component.debug())
    return component;
}

describe('App Component Suite', () => {

    let component;
    beforeEach(() => {
        const initialState =
        {
            postReducer: {posts: [{
                title: 'Test Title 1',
                body: 'Test Body'
            }, {
                title: 'Test Title 2',
                body: 'Test Body'
            }, {
                title: 'Test Title 3',
                body: 'Test Body'
            }]}
        }

        component = setup(initialState);
    })
    it('Should render', () => {
        
        const appComponent = findByTestAttr(component, 'appComponent');
        expect(appComponent.length).toBe(1);
    })

    it('Method should update state, toggle boolean', () => {
        const componentInstance = component.instance();
        componentInstance.toggleBtn();
        const newState = componentInstance.state.showBtn;
        expect(newState).toBe(false);
    })

    it('Should return incremented value', () => {
        const componentInstance = component.instance();
        const newValue = componentInstance.exampleMethod(1);
        expect(newValue).toEqual(2);
        expect(newValue).not.toBeNaN();
    })

})
