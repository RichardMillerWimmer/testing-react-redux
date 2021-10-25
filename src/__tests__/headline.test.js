import React from "react";
import { shallow } from "enzyme";
import Headline from "../components/Headline";
import { findByTestAttr, checkProps } from "../utils/testing";

const setup = (props = {}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
}


describe('Headling Component Suite', () => {

    describe('Checking PropTypes', () => {
        
        it('Should not throw warnings', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Description',
                tempArr: [{
                    fName: 'test first name', 
                    lName: 'test last name',
                    email: 'test@email.com',
                    age: false,
                    onlineStatus: false
                }]
            }
            
            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Render with Props', () => {

        let component;

        beforeEach(() => {
            const props = { header: 'Test Header', desc: 'Test Desc'};
            component = setup(props);
            
        })

        it('Renders without errors', () => {
            // console.log(component.debug());
            const wrapper = findByTestAttr(component, 'headlineComponent');
            // console.log(wrapper)
            expect(wrapper.length).toBe(1);
        })

        it('Renders an H3', () => {
            const h3 = findByTestAttr(component, 'headlineHeader');
            // expect(h3.length).toBe(1);
            expect(h3.contains('Test Header')).toBe(true);
        })

        it('Renders an P with desc', () => {
            const desc = findByTestAttr(component, 'headlineDesc');
            // expect(desc.length).toBe(1);
            expect(desc.contains('Test Desc')).toBe(true);
        })

    })

    describe('Render without Props', () => {

        let component;

        beforeEach(() => {
            component = setup();
        })

        it('Renders without errors', () => {
            const wrapper = findByTestAttr(component, 'headlineComponent');
            expect(wrapper.isEmptyRender()).toBe(true);
        })
    })

})