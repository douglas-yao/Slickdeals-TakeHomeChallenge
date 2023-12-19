import { useEffect, useState } from 'react';

type UseGameTimer = {
  timeRemaining: number;
  restartTimer: () => void;
};

/**
 * A custom hook for managing game timers.
 * @param initialTime - The initial time for the timer.
 * @param onTimeout - A callback function to be executed when the timer reaches zero.
 * @returns An object containing the time remaining and a function to restart the timer.
 */
const useGameTimer: (
  initialTime: number,
  onTimeout: () => void
) => UseGameTimer = (initialTime, onTimeout) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    // Update the timer every second
    if (timeRemaining > 0) {
      timerId = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      // Execute the provided callback when the timer reaches zero
      onTimeout();
    }

    // Clean up the timer when the component unmounts or the timeRemaining changes
    return () => {
      clearTimeout(timerId);
    };
  }, [timeRemaining, onTimeout]);

  /**
   * Restarts the timer with the initial time.
   */
  const restartTimer = () => {
    setTimeRemaining(initialTime);
  };

  return {
    timeRemaining,
    restartTimer,
  };
};

export default useGameTimer;
