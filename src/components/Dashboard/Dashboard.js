import React from "react";
import "./dashboard.css";
import { DashboardHeader } from "../DashboardHeader/DashboardHeader";
import { InvoiceComponent } from "../InvoiceComponent/InvoiceComponent";
import { GridComponent } from "../GridComponent/GridComponent";
export const Dashboard = ({
  displayPaidDrawerHandler,
  displayPartialPaidDrawerHandler,
}) => {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <InvoiceComponent />
      <GridComponent
        displayPaidDrawerHandler={displayPaidDrawerHandler}
        displayPartialPaidDrawerHandler={displayPartialPaidDrawerHandler}
      />
    </div>
  );
};
