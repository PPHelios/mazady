import React from "react";
import { Button } from "./ui/button";

function CTAButton() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Button
          className="animation-pulse flex h-20 w-60 items-center justify-center
            rounded-lg bg-orange-600 hover:bg-orange-700 text-2xl font-bold text-white md:w-80"
        >
          Add Your Item Now
        </Button>
      </div>
    </div>
  );
}

export default CTAButton;
