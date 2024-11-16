"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface RedirectAfterDelayProps {
  delay: number; // delay in milliseconds
  target: string; // URL to redirect to
}

const RedirectAfterDelay = ({ delay, target }: RedirectAfterDelayProps) => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push(target);
    }, delay);

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [delay, target, router]);

  return null;
};

export default RedirectAfterDelay;
