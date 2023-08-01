import React from "react";
import avatar from "./Avatar.png";

import "./headericons.css";
export const HeaderIcons = ({ iconName, icon }) => {
  return iconName !== "avatarIcon" ? (
    <div className="headerIconContainer">
      <div className="headerIcons">{icon}</div>
    </div>
  ) : (
    <div className="headerIconContainer">
      <div className="headerIcons">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
};
