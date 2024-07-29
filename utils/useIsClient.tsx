import React from "react";

function useIsClient() {
  const [isClient, setIsClient] = React.useState(
    () => typeof window !== "undefined",
  );

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, [typeof window]);
  return isClient;
}

export default useIsClient;
