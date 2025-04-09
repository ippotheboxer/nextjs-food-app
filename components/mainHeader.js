import React from 'react';
// Components
import Logo from './logo';
import Navigation from './Navigation';

import classes from "./mainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <Navigation />
    </header>
  );
}

export default MainHeader;