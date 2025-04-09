import React from 'react';
// Components
import Logo from './logo';
import Navigation from './Navigation';
import MainHeaderBackground from "./MainHeaderBackground";

import classes from "./mainHeader.module.css";

const MainHeader = () => {
  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
      <Logo />
      <Navigation />
    </header>
    </>
  );
}

export default MainHeader;