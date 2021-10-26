import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from '../utils/testing';
import ListItem from "../components/ListItem";

const setup = (props = {}) => {
    const component = shallow(<ListItem {...props} />);
    return component;
}

describe('ListItem Component Suite', () => {
    
    describe('Checking PropTypes', () => {
        
        it('Should NOT throw warning', () =>{

            const expectedProps = {
                title: 'Test Title',
                desc: 'Test Description'
            }
            const propsErr = checkProps(ListItem, expectedProps);
            expect(propsErr).toBeUndefined();
        })

    })

    describe('Renders ListItem', () => {
        
        let component;
        beforeEach(() => {
            const props = {
                title: 'Test Title',
                desc: 'Test Description'
            }
            component = setup(props)
        })

        it('Should Render ListItem', () => {
            const listItem = findByTestAttr(component, 'listItemComponent');
            expect(listItem.length).toBe(1);
        })

        it('Should Render Title', () => {
            const title = findByTestAttr(component, 'componentTitle');
            expect(title.contains('Test Title')).toBe(true);
        })

        it('Should Render Desc', () => {
            const desc = findByTestAttr(component, 'componentDesc');
            expect(desc.contains('Test Description')).toBe(true);
        })
    })

    describe('Does Not Render', () => {
        
        let component;
        beforeEach(() => {
            const props = {
                title: 'Test Title',
                desc: 'Test Description'
            }
            component = setup(props)
        })

        it('Component is not rendered without Props', () => {
            const listItem = findByTestAttr(component, 'listItemComponent');
            expect(listItem.length).toBe(1);
        })
    })
    
    
    
})
