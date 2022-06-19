import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/appContext";
import { Sling as Hamburger } from 'hamburger-react';
import ToggleButton from './ToggleButton';
import { FaChartPie } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { Menu, Nav, NavHeader, MenuRow, TitleLogo, DonateLink } from './styledComps';
import {useTheme} from 'styled-components';

const Navbar = ({curTheme, changeTheme, curContrast, changeContrast}) => {

  const [isOpen, setOpen] = useState(false);

  const theme = useTheme();

  const {
    hardMode,
    setHardMode,
    setShowStats,
  } = useContext(AppContext);

  const menu = () => {
    if (isOpen) {
      return (
        <Menu>
          <MenuRow>
            <h3>Hard Mode</h3>
            <ToggleButton
              text1={"On"}
              text2={"Off"}
              active={hardMode === true ? "left" : "right"}
              onClick1={() => setHardMode(true)}
              onClick2={() => setHardMode(false)}
            />
          </MenuRow>
          <MenuRow>
            <h3>Theme</h3>
            <ToggleButton
              text1={"Dark"}
              text2={"Light"}
              active={curTheme === "dark" ? "left" : "right"}
              onClick1={() => changeTheme("dark")}
              onClick2={() => changeTheme("light")}
            />
          </MenuRow>
          <MenuRow>
            <h3>High Contrast</h3>
            <ToggleButton
              text1={"On"}
              text2={"Off"}
              active={curContrast === true ? "left" : "right"}
              onClick1={() => changeContrast(true)}
              onClick2={() => changeContrast(false)}
            />
          </MenuRow>
          <MenuRow>
            <h3>
            <DonateLink href={"https://buymeacoffee.com/nolandonley"} target={"_blank"}>Donate</DonateLink>
            </h3>
          </MenuRow>
        </Menu>
      );
    }
  }

  return (
    <Nav>
      <IconContext.Provider
        value={{ color: `${theme.colorText}`, size: '30px', cursor: 'pointer' }}
      >
        <FaChartPie onClick={()=>setShowStats(true)} />
        <TitleLogo src={`viLogo${curTheme}.png`} alt={"logo"}></TitleLogo>
        <NavHeader>ordle</NavHeader>
        {isOpen ? (
          <IoCloseSharp onClick={()=>setOpen(false)}/>
        ) : (
          <GiHamburgerMenu onClick={()=>setOpen(true)}/>
        )}
        {menu()}
      </IconContext.Provider>
    </Nav>
  );
}

export default Navbar;
