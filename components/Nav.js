
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
                    <Link href="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link href="/">About</Link>
                </li>
            </ul>
            <div className={navStyles.navLogo}>Contact Us</div>
        </nav>
    );
}

export default Nav;