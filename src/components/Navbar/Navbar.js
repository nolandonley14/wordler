import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/appContext";
import './navbar.css';
import { Sling as Hamburger } from 'hamburger-react';
import ToggleButton from './ToggleButton';

const Navbar = ({mode, modeHandler}) => {

  const [isOpen, setOpen] = useState(false);

  const {
    theme,
    setTheme,
    hardMode,
    setHardMode,
    highContrast,
    setHighContrast,
  } = useContext(AppContext);

  // useEffect(() => {
  //
  // }, [gameType]);

  const menu = () => {
    if (isOpen) {
      return (
        <div className="menu">
          <div className="menuRow">
            <h3>Hard Mode</h3>
            <ToggleButton
              text1={"On"}
              text2={"Off"}
              class1={hardMode === true ? "left active" : "left"}
              class2={hardMode === false ? "right active" : "right"}
              onClick1={() => setHardMode(true)}
              onClick2={() => setHardMode(false)}
            />
          </div>
          <div className="menuRow">
            <h3>Theme</h3>
            <ToggleButton
              text1={"Dark"}
              text2={"Light"}
              class1={theme === "dark" ? "left active" : "left"}
              class2={theme === "light" ? "right active" : "right"}
              onClick1={() => setTheme("dark")}
              onClick2={() => setTheme("light")}
            />
          </div>
          <div className="menuRow">
            <h3>High Contrast</h3>
            <ToggleButton
              text1={"On"}
              text2={"Off"}
              class1={highContrast === true ? "left active" : "left"}
              class2={highContrast === false ? "right active" : "right"}
              onClick1={() => setHighContrast(true)}
              onClick2={() => setHighContrast(false)}
            />
          </div>
          <div className="menuRow">
            <h3>Donate</h3>
          </div>
        </div>
      );
    }
  }

  return (
    <nav className="nav">
      <img src={"viLogoWhite.png"} className="titleLogo" alt={"logo"}></img>
      <h1>ordle</h1>
      <Hamburger direction="right" toggled={isOpen} toggle={setOpen}/>
      {menu()}
    </nav>
  );
}

export default Navbar;
