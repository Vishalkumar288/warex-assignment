const selectionItemList = [
  {
    itemName: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="13"
        viewBox="0 0 14 13"
        fill="none"
        style={{ width: "12px", height: "10.437px", flexShrink: "0" }}
      >
        <path
          d="M4.57867 1.0685L1.912 1.95717C1.36733 2.1385 1 2.6485 1 3.2225V10.5158C1 11.0112 1.52133 11.3338 1.96467 11.1118L4.40333 9.8925C4.77867 9.7045 5.22067 9.7045 5.596 9.8925L8.40333 11.2965C8.77867 11.4845 9.22067 11.4845 9.596 11.2965L12.2627 9.96317C12.7147 9.73717 13 9.27517 13 8.7705V1.8525C13 1.39717 12.554 1.07583 12.1227 1.21983L9.422 2.11983C9.148 2.21117 8.85267 2.21117 8.57867 2.11983L5.42133 1.0685C5.148 0.977167 4.852 0.977167 4.57867 1.0685V1.0685Z"
          stroke="#0F2744"
          strokewdith="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 4.61475V8.57475"
          stroke="#607088"
          strokewdith="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 3.28076V7.24076"
          stroke="#607088"
          strokewdith="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    itemName: "Orders",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        style={{ width: "13.309px", height: "12px", flexShrink: "0" }}
      >
        <path
          d="M4.95629 8.52864L3.7251 3.30893H13.8522C14.3743 3.30893 14.7569 3.74907 14.6302 4.20433L13.549 8.0885C13.3845 8.67847 12.8263 9.11213 12.1526 9.17264L6.68557 9.66392C5.87066 9.73668 5.12553 9.24755 4.95629 8.52864V8.52864Z"
          stroke="#0F2744"
          strokewdith="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.8797 4.04065L3.07419 0.999847H1.3457"
          stroke="#2773FF"
          strokewdith="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.8563 11.7839C11.5207 11.7839 11.2482 12.0564 11.2515 12.3921C11.2515 12.7277 11.524 13.0002 11.8596 13.0002C12.1953 13.0002 12.4678 12.7277 12.4678 12.3921C12.4661 12.0564 12.1936 11.7839 11.8563 11.7839Z"
          stroke="#2773FF"
          strokewdith="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.17111 11.7839C5.83501 11.7839 5.56213 12.056 5.56546 12.3912C5.56213 12.7281 5.83667 13.0002 6.17277 13.0002C6.50887 13.0002 6.78175 12.7281 6.78175 12.3929C6.78175 12.056 6.50887 11.7839 6.17111 11.7839Z"
          stroke="#2773FF"
          strokewdith="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    itemName: "Inquiry",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="12"
        viewBox="0 0 14 12"
        fill="none"
        style={{ width: "12.001px", height: "9.811px", flexShrink: "0" }}
      >
        <path
          d="M0.999268 10.9053C0.999268 8.9929 2.07387 7.44235 3.39927 7.44235H5.79927C7.12467 7.44235 8.19927 8.9929 8.19927 10.9053"
          stroke="#0F2744"
          strokewdith="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.0842 1.70977C6.9043 2.52988 6.9043 3.85952 6.0842 4.67962C5.26409 5.49973 3.93445 5.49973 3.11435 4.67962C2.29424 3.85952 2.29424 2.52988 3.11435 1.70977C3.93445 0.88967 5.26409 0.88967 6.0842 1.70977"
          stroke="#0F2744"
          strokewdith="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.40063 6.88571H11.2006C12.1948 6.88571 13.0006 7.98212 13.0006 9.33487"
          stroke="#0F2744"
          strokewdith="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.3597 2.13365C11.9455 2.71943 11.9455 3.66918 11.3597 4.25496C10.7739 4.84075 9.8242 4.84075 9.23841 4.25496C8.65263 3.66918 8.65263 2.71943 9.23841 2.13365C9.8242 1.54786 10.7739 1.54786 11.3597 2.13365"
          stroke="#0F2744"
          strokewdith="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const headerIcons = [
  {
    iconID: 1,
    iconName: "cartIcon",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
      >
        <path
          d="M4.95635 8.52864L3.72516 3.30893H13.8522C14.3744 3.30893 14.757 3.74907 14.6302 4.20433L13.549 8.0885C13.3846 8.67847 12.8264 9.11213 12.1526 9.17264L6.68564 9.66392C5.87072 9.73668 5.12559 9.24755 4.95635 8.52864V8.52864Z"
          stroke="#607088"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.87964 4.04065L3.07412 0.999847H1.34564"
          stroke="#607088"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.8562 11.7839C11.5205 11.7839 11.248 12.0564 11.2514 12.3921C11.2514 12.7277 11.5239 13.0002 11.8595 13.0002C12.1952 13.0002 12.4677 12.7277 12.4677 12.3921C12.466 12.0564 12.1935 11.7839 11.8562 11.7839Z"
          stroke="#607088"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.17092 11.7839C5.83482 11.7839 5.56195 12.056 5.56528 12.3912C5.56195 12.7281 5.83649 13.0002 6.17259 13.0002C6.50869 13.0002 6.78157 12.7281 6.78157 12.3929C6.78157 12.056 6.50869 11.7839 6.17092 11.7839Z"
          stroke="#607088"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    iconID: 2,
    iconName: "notificationIcon",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
      >
        <path
          d="M11 5.33459C11 4.27373 10.5786 3.25631 9.82843 2.50617C9.07828 1.75602 8.06087 1.33459 7 1.33459C5.93913 1.33459 4.92172 1.75602 4.17157 2.50617C3.42143 3.25631 3 4.27373 3 5.33459C3 10.0013 1 11.3346 1 11.3346H13C13 11.3346 11 10.0013 11 5.33459Z"
          stroke="#607088"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.15335 14.0011C8.03614 14.2032 7.86791 14.3709 7.6655 14.4875C7.46309 14.604 7.2336 14.6654 7.00001 14.6654C6.76643 14.6654 6.53694 14.604 6.33453 14.4875C6.13212 14.3709 5.96389 14.2032 5.84668 14.0011"
          stroke="#607088"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    iconID: 3,
    iconName: "avatarIcon",
  },
];

let gridData = [
  {
    orderID: "ID 230123",
    invoiceNo: "C123456789",
    invoiceDate: "16 March 2023",
    totalAmount: "5,000",
    amountPaid: "4,000",
    balance: "1000",
    paymentStatus: "Partially paid",
  },
  {
    orderID: "ID 230122",
    invoiceNo: "C123456789",
    invoiceDate: "16 March 2023",
    totalAmount: "5,000",
    amountPaid: "5,000",
    balance: "",
    paymentStatus: "Paid",
  },
  {
    orderID: "ID 230125",
    invoiceNo: "C123456789",
    invoiceDate: "16 March 2023",
    totalAmount: "10,000",
    amountPaid: "8,000",
    balance: "1000",
    paymentStatus: "Partially paid",
  },
];
export { selectionItemList, headerIcons ,gridData};
