import React from 'react'
import * as Classes from 'Styles/components.header'
import { Link } from 'react-router-dom'

const Header = () => (
    <header className={Classes.header}>
        <Link to="/" className={Classes['header-link']}>
            <img className={Classes['header-image']} src="./images/home.svg" alt="Home" title="Home" />
        </Link>
    </header>
)

export default Header
