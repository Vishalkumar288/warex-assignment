import React from "react";
import "./dashboardHeader.css";
import { HeaderIcons } from "../HeaderIcons/HeaderIcons";
import { headerIcons } from "../Constants/Constants";
export const DashboardHeader = () => {
  return (
    <div className="dashboardHeader">
      {headerIcons.map(({ iconID, iconName, icon }) => (
        <HeaderIcons key={iconID} iconName={iconName} icon={icon} />
      ))}
    </div>
  );
};
