import React from "react";
import BlockMain from "./blockMain/blockMain";
import BlockOne from "./BlockOne/BlockOne";
import BlockTwo from "./BlockTwo/BlockTwo";
import TimelineComp from "./TimelineComp/Timeline";
import Footer from "./footer/footer";
import "./body.css"
function body() {
  return (
    <div className="body">
      <div className = "body-container">
      <BlockMain />
      <BlockOne />
      <BlockTwo />
      <TimelineComp />
      <Footer />
      </div>
    </div>
  );
}

export default body;
