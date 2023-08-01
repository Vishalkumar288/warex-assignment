import React from "react";
import "./buttons.css";
export const Button = ({
  paymentStatus,
  displayPaidDrawerHandler,
  displayPartialPaidDrawerHandler,
}) => {
  let classid =
    paymentStatus === "Paid" ? "button-paid" : "button-partiallypaid";

  const onClickHandler = (paymentStatus) => {
    if (paymentStatus === "Paid") {
      displayPaidDrawerHandler("flex");
      displayPartialPaidDrawerHandler("none");
    } else {
      displayPartialPaidDrawerHandler("flex");
      displayPaidDrawerHandler("none");
    }
  };
  return (
    <div className={classid} onClick={()=>onClickHandler(paymentStatus)}>
      <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <circle
            cx="5"
            cy="5"
            r="4.25"
            fill={paymentStatus === "Paid" ? "#0F8B6C" : "#CC9D42"}
            stroke="white"
            stroke-width="0.5"
          />
        </svg>
      </div>
      <div className="status">{paymentStatus}</div>
    </div>
  );
};
