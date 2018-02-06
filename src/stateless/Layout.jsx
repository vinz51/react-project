import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => [
    <Header key="header" />,
    <main key="main">
        { props.children }
    </main>,
    <Footer key="footer" />
]

export default Layout
