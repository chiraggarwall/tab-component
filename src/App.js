import React from "react";
import { TabPans, Tabs } from "./Tabs";
import "./style.css";
const TabsExample = () => {
  return (
    <Tabs>
      <TabPans title="Basic">This is Basic !</TabPans>
      <TabPans title="Moderate">This is Moderate !</TabPans>
      <TabPans title="Premium">This is Premium</TabPans>
    </Tabs>
  );
};

export default TabsExample;
