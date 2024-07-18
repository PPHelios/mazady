import React from "react";

function CTAButton() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div
          className="animation-pulse flex h-20 w-60 md:w-80 items-center justify-center
            rounded-lg bg-red-400 text-2xl font-bold text-white"
        >
          Add Your Item Now
        </div>
      </div>
    </div>
  );
}

export default CTAButton;
