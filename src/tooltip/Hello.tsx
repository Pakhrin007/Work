import React, { useState } from "react";
import Tooltip from ".";


const Hello = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState("");

  const handleMouseEnter = () => {
    setTooltipText("Hello"); // Pass "Hello" text to the tooltip
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    setTooltipText(""); // Clear the tooltip text
  };

  return (
    <div className="relative">
      <div
        className="h-8 w-12 bg-red-700 flex items-center justify-center cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="text-white">Hello</p>
      </div>
      <Tooltip isvisible={showTooltip} text={tooltipText} />
    </div>
  );
};

export default Hello;
