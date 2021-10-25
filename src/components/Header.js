import React from 'react'
import '../styles/header.scss';

const Header = (props) => {
    return (
        <header data-test='header-component'>
            <div className='wrap'>
                <div className='logo'>
                    <h3 data-test='logo-img'>Logo</h3>
                </div>
            </div>
        </header>
    )
}

export default Header
