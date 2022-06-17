import React, { useContext } from "react";
import { TypeButtons, NavButtonLeft, NavButtonRight } from './styledComps';
import styled, {useTheme} from 'styled-components';

function ToggleButton({text1, text2, active, onClick1, onClick2}) {

  const theme = useTheme();

  return (
    <TypeButtons>
      <NavButtonLeft
        onClick={onClick1}
        style={active == "left" ? {"background-color": `${theme.colorText}`,
        "color": `${theme.colorBackground}`} : {}}
      >
      {text1}
      </NavButtonLeft>
      <NavButtonRight
        onClick={onClick2}
        style={active == "right" ? {"background-color": `${theme.colorText}`,
        "color": `${theme.colorBackground}`} : {}}
      >
      {text2}
      </NavButtonRight>
    </TypeButtons>
  );
}

export default ToggleButton;
