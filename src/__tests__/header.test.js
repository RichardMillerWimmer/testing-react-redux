import React from "react";
import { shallow } from 'enzyme';
import Header from "../components/Header";

const setup = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

describe('Header Component Suite', () => {

    let component;

    beforeEach(() => {
        component = setup();
    })

    it('Should render without errors', () => {
        // console.log(component.debug());
        const wrapper = component.find(`[data-test='header-component]`);
        expect(wrapper.length).toBe(1)
    })

    it('Should render the logo', () => {
        const logo = component.find(`[data-test='logo-img']`)
        expect(logo.length).toBe(1)
    })
})
