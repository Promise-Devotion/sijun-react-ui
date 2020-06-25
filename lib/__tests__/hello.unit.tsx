// describe(Button.displayName, () => {
//     it('DisplayName', () => {
//       expect(Button.displayName).toEqual('Button')
//     })

import renderer from 'react-test-renderer'
import React from 'react'
import Button from '../button'

describe('button', () => {
    it('是一个div', ()=> {
        const json = renderer.create(<Button />).toJSON()
        expect(json).toMatchSnapshot()
    })
})