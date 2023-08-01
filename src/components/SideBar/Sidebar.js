import React from "react";
import "./sidebar.css";
import { SelectionItem } from "../SelectionItems/SelectionItem";
import { selectionItemList } from "../Constants/Constants";
import Logo from "./Warexlogo.png";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="company logo" />
      </div>
      <div className="selectionList">
        {selectionItemList.map(({ itemName,icon }) => (
          <SelectionItem key={itemName} itemName={itemName} icon={icon} />
        ))}
      </div>
    </div>
  );
};
