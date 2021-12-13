
import React from 'react';
import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';

function Nav(props) {
    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.navLogo}>NASA Gallery</div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Gallery</Link>
                </li>
                <li>
                    <Link href="/">About</Link>
                </li>
            </ul>
            <div className={navStyles.navLogo}>About Us</div>
        </nav>
    );
}

export default Nav;