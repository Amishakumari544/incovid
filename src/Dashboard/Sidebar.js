import React from "react";
import CardComponent from "./CardComponent";
import SearchInput from "./SearchInput";
import incovid from "./../assets/incovid.png"
import "./sidebar.css";
function Sidebar() {
  return (
    <div>
      {/* <div className=""> */}
        {/* <img src={incovid} alt="logo" className="" /> */}
      {/* </div> */}
    
       <div className="content">
              {/* <SearchInput /> */}
              <CardComponent />
            </div>
            </div>
       
       
  );
}

export default Sidebar;
