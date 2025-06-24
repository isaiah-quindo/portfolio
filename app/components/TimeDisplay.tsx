"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function TimeDisplay() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Function to update time
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Manila",
      };

      const manilaTime = new Date().toLocaleTimeString("en-US", options);
      setTime(manilaTime + " GMT+8");
    };

    // Update immediately
    updateTime();

    // Update every minute
    const interval = setInterval(updateTime, 60000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-display flex flex-row flex-grow-1 gap-4 items-center rounded-lg border border-gray-600 hover:border-blue-300 transition-all duration-300 p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <p>
        <span className="text-xl">{time}</span> <br /> in Manila
      </p>
    </div>
  );
}
