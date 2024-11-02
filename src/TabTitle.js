import React, { useState } from "react";

const TabTitle = ({ title, isActive, index, handleIndex }) => {
  return (
    <li
      className={isActive === true ? "active" : ""}
      onClick={() => {
        handleIndex(index);
      }}
    >
      {title}
    </li>
  );
};

export default TabTitle;
