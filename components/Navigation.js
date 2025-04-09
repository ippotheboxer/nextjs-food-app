import React from 'react';
import Link from 'next/link';

import classes from "./mainHeader.module.css";

const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community">Foodies Community</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;