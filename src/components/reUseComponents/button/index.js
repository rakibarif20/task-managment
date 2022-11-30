import React from "react";

import "./style.scss";

const ReUseButton = ({ buttonName, onClick,type }) => {
  return (
    <>
    <button type={type} className="reuseButton" onClick={onClick}>
      {buttonName}
    </button>
    </>
  );
};
export default ReUseButton;
