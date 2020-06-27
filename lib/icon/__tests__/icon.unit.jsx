import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '../icon'


describe('ixon', () => {
  it('DisplayName', () => {
    const json = renderer.create(<Icon name={'zfb'}></Icon>).toJSON()
    expect(json).toMatchSnapshot()
  })
})