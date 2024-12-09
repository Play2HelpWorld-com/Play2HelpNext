"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLoading } from "@/app/utils/context/LoadingContext";

const RouteChangeHandler = ({
  timeoutDuration = 500,
}: {
  timeoutDuration?: number;
}) => {
  const currentPath = usePathname();
  const { setIsLoading } = useLoading();
  const [prevPath, setPrevPath] = useState<string | null>(null);

  useEffect(() => {
    if (prevPath && prevPath !== currentPath) {
      setIsLoading(true);

      // Trigger a delay for the loading effect
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, timeoutDuration);

      return () => clearTimeout(timeout);
    }
    // Update previous path only if it has changed
    if (prevPath !== currentPath) {
      setPrevPath(currentPath);
    }
  }, [currentPath, prevPath, setIsLoading, timeoutDuration]);

  return null;
};

export default RouteChangeHandler;
