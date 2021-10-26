import React from "react";
import { findByTestAttr, checkProps } from '../utils/testing';
import { shallow } from 'enzyme';
import Button from "../components/button";

const setup = (props = {}) => {
    const component = shallow(<Button {...props} />);
    return component;
}

describe('Button Test Suite', () => {
    
    describe('Checking Button PropTypes', () => {
        
        it('Should NOT throw warnings', () => {
            const expectedProps = {
                buttonText: 'Example Test',
                emitEvent: () => {}
            }
            const propsErr = checkProps(Button, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Renders Button', () => {
        
        let component;

        beforeEach(() => {
            const props = {
                buttonText: 'Example Test',
                emitEvent: () => {}
            }
            component = setup(props);
        });

        it('Should render the Button', () =>{
            const button = findByTestAttr(component, 'buttonComponent');
            expect(button.length).toBe(1);
        })

    })
    
    
})
