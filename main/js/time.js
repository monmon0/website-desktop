import React, { useState, useEffect } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <p> {time}</p>
    </div>
  );
};

export default CurrentTime;
