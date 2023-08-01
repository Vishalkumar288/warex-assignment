import React from "react";
import "./paiddrawer.css";
export const PaidDrawer = ({
  displayType,
  displayPaidDrawerHandler,
  displayPartialPaidDrawerHandler,
}) => {
  const onCloseHandler1=()=>{
    displayPaidDrawerHandler("none");
      displayPartialPaidDrawerHandler("none");
  }
  return (
    <div className="paidDrawer" style={{ display: `${displayType}` }}>
      <div className="visible"></div>
      <div className="PaidDiv">
        <div className="InvoiceBox">
          <div className="AmountCloseContainer">
            <div className="AmountContainer1">
              <div className="Amount">₹5,000</div>
              <div className="icon1">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="5"
                    cy="5"
                    r="4.25"
                    fill="#0F8B6C"
                    stroke="white"
                    stroke-width="0.5"
                  />
                </svg>
                Paid
              </div>
            </div>
            <div className="CloseBox" onClick={()=>onCloseHandler1()}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L15 15M15 1L1 15"
                  stroke="#607088"
                  stroke-width="1.68"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="InvoiceDetails">
            <div className="Idetail">
              Invoice No : <span style={{ color: "#0F2744" }}>1234 2345</span>
            </div>
            <div className="Idetail">
              Invoice Date :{" "}
              <span style={{ color: "#0F2744" }}>15 Mar, 2023</span>{" "}
            </div>
          </div>
          <div className="view">view details</div>
        </div>
        <div className="CustomerPayment">
          <div className="CustomerBox">
            <div className="CustomerHeading">
              Customer payment{" ㅤㅤㅤ"}
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "19px",
                  letterSpacing: "0.005em",
                }}
              >
                ₹5,000
              </span>
            </div>
            <div className="CustomerTransaction">
              <div className="Transactions">
                <div className="PayAmount">Payment amount</div>
                <div className="AmountPaid">₹ 4,000</div>
                <div className="Date">13 Mar, 2023</div>
              </div>
              <div className="Transactions">
                <div className="PayAmount">Transaction ID</div>
                <div className="AmountPaid">XXXX122345</div>
                <div className="Date"></div>
              </div>
            </div>
            <div className="CustomerTransaction" style={{ paddingTop: "19px" }}>
              <div className="Transactions">
                <div className="PayAmount">Payment amount</div>
                <div className="AmountPaid">₹ 1,000</div>
                <div className="Date">15 Mar, 2023</div>
              </div>
              <div className="Transactions">
                <div className="PayAmount">Transaction ID</div>
                <div className="AmountPaid">XXXX122345</div>
                <div className="Date"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="Commission">
          <div className="CustomerBox">
            <div className="ComissionHeading">
              <div className="CustomerHeading">Commission details</div>
              <div className="DownloadDetails">Download Invoice</div>
            </div>
            <div className="CustomerTransaction">
              <div className="Transactions">
                <div className="PayAmount">Commission amount</div>
                <div className="AmountPaid" style={{ fontWeight: "600" }}>
                  ₹ 1,000
                </div>
                <div className="Date"></div>
              </div>
              <div className="Transactions">
                <div className="PayAmount">Commissioned claimed</div>
                <div className="AmountPaid">₹ 1,000</div>
                <div className="Date"></div>
              </div>
              <div className="Transactions">
                <div className="PayAmount">Invoice No.</div>
                <div className="AmountPaid">12345567</div>
                <div className="Date"></div>
              </div>
              <div className="Transactions">
                <div className="PayAmount">Invoice Date</div>
                <div className="AmountPaid">16 Mar, 2023</div>
                <div className="Date"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="NetPayout">
          <div className="CustomerBox">
            <div className="CustomerHeading">
              Net Payout{" ㅤㅤㅤㅤㅤㅤ"}
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "19px",
                  letterSpacing: "0.005em",
                }}
              >
                ₹4,000
              </span>
            </div>
            <div className="CustomerTransaction">
              <div className="Transactions">
                <div className="PayAmount">Payment amount</div>
                <div className="AmountPaid">₹ 3,200</div>
                <div className="Date">16 Mar, 2023</div>
              </div>
              <div className="Transactions">
                <div className="PayAmount">Transaction ID</div>
                <div className="AmountPaid">XXXX122345</div>
                <div className="Date"></div>
              </div>
            </div>
            <div className="CustomerTransaction" style={{ paddingTop: "19px" }}>
              <div className="Transactions">
                <div className="PayAmount">Payment amount</div>
                <div className="AmountPaid">₹ 800</div>
                <div className="Date">16 Mar, 2023</div>
              </div>
              <div className="Transactions">
                <div className="PayAmount">Transaction ID</div>
                <div className="AmountPaid">XXXX122345</div>
                <div className="Date"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
