import expect from 'expect'
import TextInput from '../src/TextInput'
import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils';

describe('TextInput', () => {
    it('renders with the default value in the input', () => {
        const defaultValue = 'Hello, World!'
        const component = renderIntoDocument(
            <TextInput  defaultValue={defaultValue}/>
        )

        const input = findRenderedDOMComponentWithTag(component, 'input')
        expect(input.value).toEqual(defaultValue)
    })

    it('updates the value in the input', () => {
        const component = renderIntoDocument(
            <TextInput />
        )

        const newValue = 'Hey!'
        const input = findRenderedDOMComponentWithTag(component, 'input')
        expect(input.value).toEqual('')
        Simulate.change(input, {target: {value: newValue}})
        expect(input.value).toEqual(newValue)
    })
})