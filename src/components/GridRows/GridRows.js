import React from "react";
import "./gridrows.css";
import { Button } from "../Buttons/Button";
export const GridRows = (rowData) => {
  return (
    <div className="gridRows">
      <div className="tr">
        <div className="row">
          <div className="txtrow" style={{ fontWeight: "bold" }}>
            {rowData.rowData.orderID}
          </div>
        </div>
      </div>
      <div className="tr">
        <div className="row">
          <div className="txtrow">{rowData.rowData.invoiceNo}</div>
        </div>
      </div>
      <div className="tr">
        <div className="row">
          <div className="txtrow">{rowData.rowData.invoiceDate}</div>
        </div>
      </div>
      <div className="tr">
        <div className="row">
          <div className="txtrow">₹ {rowData.rowData.totalAmount}</div>
        </div>
      </div>
      <div className="tr">
        <div className="row">
          <div className="txtrow">₹ {rowData.rowData.amountPaid}</div>
        </div>
      </div>
      <div className="tr">
        <div className="row">
          <div
            className="txtrow"
            style={{ color: "var(--error-dark, #A83B3B)" }}
          >
            {rowData.rowData.balance !== ""
              ? "₹" + rowData.rowData.balance
              : "-"}
          </div>
        </div>
      </div>
      <div className="tr">
        <div className="row">
          <div className="txtrow">
            <Button
              paymentStatus={rowData.rowData.paymentStatus}
              displayPaidDrawerHandler={rowData.displayPaidDrawerHandler}
              displayPartialPaidDrawerHandler={
                rowData.displayPartialPaidDrawerHandler
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
