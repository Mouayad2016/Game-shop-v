import React from "react";
import Gallery from "./gallery";
import SideBar from "./sideBarComponent";

const MainBanner = () => {
  return (
    <div class="main_banner">
      <div class="right">
        <SideBar /> {/* <RotateImage /> */} {/* <Gallery /> */}
      </div>
      <div class="middel">
        <Gallery />
      </div>{" "}
      <div class="left">
        <div class="left_card_up"> Your place to play</div>
        <div class="left_card_down"> Chose your style</div>
      </div>
    </div>
  );
};
export default MainBanner;
