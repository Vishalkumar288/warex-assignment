import React from "react";
import "./gridcomponent.css";
import { GridHeader } from "../GridHeader/GridHeader";
import { GridRows } from "../GridRows/GridRows";
import { gridData } from "../Constants/Constants";
export const GridComponent = ({
  displayPartialPaidDrawerHandler,
  displayPaidDrawerHandler,
}) => {
  return (
    <div className="gridComponent">
      <GridHeader />
      {gridData.map((gridRow) => (
        <GridRows
          key={gridRow.orderID}
          rowData={gridRow}
          displayPaidDrawerHandler={displayPaidDrawerHandler}
          displayPartialPaidDrawerHandler={displayPartialPaidDrawerHandler}
        />
      ))}
    </div>
  );
};
