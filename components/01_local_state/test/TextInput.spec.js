import expect, { spyOn } from 'expect'
import TextInput from '../src/TextInput'
import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils';
import sinon from 'sinon'

describe('TextInput', () => {
    it('renders with the default value in the input', () => {
        const defaultValue = 'Hello, World!'
        const component = renderIntoDocument(
            <TextInput  defaultValue={defaultValue}/>
        )

        const input = findRenderedDOMComponentWithTag(component, 'input')
        expect(input.value).toEqual(defaultValue)
    })

    it('renders with the input of undefined status', () => {
        const component = renderIntoDocument(
            <TextInput />
        )
        const input = findRenderedDOMComponentWithTag(component, 'input')
        expect(input.className).toEqual('')
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

    it('validates input on Enter key press', () => {
        const textInput = <TextInput />
        const component = renderIntoDocument(textInput)
        const input = findRenderedDOMComponentWithTag(component, 'input')
        const spy = spyOn(component, 'validateInput')
        Simulate.keyPress(input, {key: 'Enter'})
        expect(spy).toHaveBeenCalled()
        spy.restore()
    })

    it('waits 2 seconds and updates state after validation', () => {
        const clock = sinon.useFakeTimers()
        const textInput = <TextInput />
        const component = renderIntoDocument(textInput)
        const input = findRenderedDOMComponentWithTag(component, 'input')
        const spy = spyOn(component, 'setState')
        Simulate.keyPress(input, {key: 'Enter'})
        expect(spy).toNotHaveBeenCalled()
        clock.tick(1000)
        expect(spy).toNotHaveBeenCalled()
        clock.tick(1000)
        expect(spy).toHaveBeenCalled()
        spy.restore()
        clock.restore()
    })
})