import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '../../src/stateless/Footer'

it('snapshot footer', () => {
    const footer = renderer.create(<Footer />).toJSON()
    expect(footer).toMatchSnapshot()
})
