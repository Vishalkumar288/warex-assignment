import React from "react";
import searchIcon from "./Vector.jpg";
import addIcon from "./Add.png";
import "./invoicecomponent.css";
export const InvoiceComponent = () => {
  return (
    <div className="invoicecomponent">
      <div className="searchbar">
        <div className="searchicon">
          <img src={searchIcon} alt="search icon" />
        </div>
        <input
          className="text"
          type="text"
          placeholder="Search by order ID partner name, etc"
        ></input>
      </div>
      <div className="createInvoice">
        <div className="invoice">Create new Invoice</div>
        <div className="addicon">
          <img src={addIcon} alt="add icon" />
        </div>
      </div>
    </div>
  );
};
