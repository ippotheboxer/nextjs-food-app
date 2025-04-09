import React from 'react';
import Link from 'next/link';

import logoImg from "@/assets/logo.png";
import classes from "./mainHeader.module.css";
import Image from 'next/image';

const Logo = () => {
    return (
        <Link href="/" className={classes.logo}>
            <Image src={logoImg} alt='A plate with food on it' priority />
            NextLevel Food
        </Link>
    );
}

export default Logo;