import { Loader2 } from "lucide-react";
import React from "react";

function LoaderComponent() {
  return (
    <div className="flex my-10 items-center justify-center">
      <Loader2 className="mr-2 size-14 animate-spin text-orange-500" />
    </div>
  );
}

export default LoaderComponent;
