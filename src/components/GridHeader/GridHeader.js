import React from "react";
import './gridheader.css';
export const GridHeader = () => {
  return (
    <div className="gridHeader">
      <div className="th">
        <div className="head">
          <div className="txtheader">Order ID</div>
        </div>
      </div>
      <div className="th">
        <div className="head">
          <div className="txtheader">Invoice No</div>
          <div className="sort">
            <div className="poly1"></div>
            <div className="poly2"></div>
          </div>
        </div>
      </div>
      <div className="th">
        <div className="head">
          <div className="txtheader">Invoice date</div>
          <div className="sort">
            <div className="poly1"></div>
            <div className="poly2"></div>
          </div>
        </div>
      </div>
      <div className="th">
        <div className="head">
          <div className="txtheader">Total amount</div>
          <div className="sort">
            <div className="poly1"></div>
            <div className="poly2"></div>
          </div>
        </div>
      </div>
      <div className="th">
        <div className="head">
          <div className="txtheader">Amount paid</div>
          <div className="sort">
            <div className="poly1"></div>
            <div className="poly2"></div>
          </div>
        </div>
      </div>
      <div className="th">
        <div className="head">
          <div className="txtheader">Balance</div>
          <div className="sort">
            <div className="poly1"></div>
            <div className="poly2"></div>
          </div>
        </div>
      </div>
      <div className="th">
        <div className="head">
          <div className="txtheader">Payment status</div>
        </div>
      </div>
    </div>
  );
};
