import expect from 'expect'
import App from '../../src/App'
import TextInput from '../../src/TextInput'
import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedComponentsWithType,
  findRenderedDOMComponentWithClass,
  Simulate
} from 'react-addons-test-utils';

describe('App', () => {
    it('renders with only one TextInput by default', () => {
        const component = renderIntoDocument(<App />)
        const inputs = scryRenderedComponentsWithType(component, TextInput)
        expect(inputs.length).toEqual(1)
    })

    it('adds one TextInput by click on "Add input" button', () => {
        const component = renderIntoDocument(<App />)
        const addInputButton = findRenderedDOMComponentWithClass(component, 'App__button')

        Simulate.click(addInputButton)
        Simulate.click(addInputButton)

        const inputs = scryRenderedComponentsWithType(component, TextInput)
        expect(inputs.length).toEqual(3)
    })
})