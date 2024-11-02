import React, { useState } from "react";
import TabTitle from "./TabTitle";

export const Tabs = ({ prevIndex = 0, children }) => {
  const [selectIndex, setSelectIndex] = useState(prevIndex);
  const handleIndex = (index) => {
    setSelectIndex(index);
  };
  return (
    <>
      <ul>
        {children.map((tab, index) => {
          return (
            <TabTitle
              title={tab.props.title}
              key={index}
              index={index}
              isActive={index === selectIndex}
              handleIndex={handleIndex}
            />
          );
        })}
      </ul>
      {children[selectIndex]}
    </>
  );
};

export const TabPans = ({ children }) => {
  return <>{children}</>;
};
