import React from 'react';
import Link from 'next/link';

import logoImg from "@/assets/logo.png";
import classes from "./mainHeader.module.css";

const Logo = () => {
    return (
        <Link href="/" className={classes.logo}>
            <img src={logoImg.src} alt='A plate with food on it' />
            NextLevel Food
        </Link>
    );
}

export default Logo;