import { useState } from "react";
import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { PaidDrawer } from "./components/PaidDrawer/PaidDrawer";
import { PartialPaidDrawer } from "./components/PartiallyPaidDrawer/PartialPaidDrawer";
import { Sidebar } from "./components/SideBar/Sidebar";
function App() {
  const displayPaidDrawerHandler = (displayType) => {
    setdisplayPaidDrawer(displayType);
    console.log("display paid drawer", displayType);
  };

  const displayPartialPaidDrawerHandler = (displayType) => {
    setdisplayPartialPaidDrawer(displayType);
    console.log("display partial paid drawer ", displayType);
  };
  const [displayPaidDrawer, setdisplayPaidDrawer] = useState("none");
  const [displayPartialPaidDrawer, setdisplayPartialPaidDrawer] =
    useState("none");
  return (
    <div className="parentContainer">
      <Sidebar />
      <Dashboard
        displayPaidDrawerHandler={displayPaidDrawerHandler}
        displayPartialPaidDrawerHandler={displayPartialPaidDrawerHandler}
      />
      <PaidDrawer
        displayType={displayPaidDrawer}
        displayPaidDrawerHandler={displayPaidDrawerHandler}
        displayPartialPaidDrawerHandler={displayPartialPaidDrawerHandler}
      />
      <PartialPaidDrawer
        displayType={displayPartialPaidDrawer}
        displayPartialPaidDrawerHandler={displayPartialPaidDrawerHandler}
        displayPaidDrawerHandler={displayPaidDrawerHandler}
      />
    </div>
  );
}

export default App;
