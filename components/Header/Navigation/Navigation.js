import React from 'react';
import Link from 'next/link';

import NavLink from './NavLink';

import classes from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink href="/meals">Browse Meals</NavLink>
                </li>
                <li>
                    <NavLink href="/community">Community</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;