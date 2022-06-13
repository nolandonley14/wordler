import React, { useContext } from "react";
import './navbar.css';

function ToggleButton({text1, text2, class1, class2, onClick1, onClick2}) {

  return (
    <div className="typeButtons">
      <button
        className={class1}
        onClick={onClick1}
      >
      {text1}
      </button>
      <button
        className={class2}
        onClick={onClick2}
      >
      {text2}
      </button>
    </div>
  );
}

export default ToggleButton;
