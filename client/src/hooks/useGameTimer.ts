import { useEffect, useState } from 'react';

type UseGameTimer = {
  timeRemaining: number;
  restartTimer: () => void;
};

const useGameTimer: (
  initialTime: number,
  onTimeout: () => void
) => UseGameTimer = (initialTime, onTimeout) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (timeRemaining > 0) {
      timerId = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      onTimeout();
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [timeRemaining, onTimeout]);

  const restartTimer = () => {
    setTimeRemaining(initialTime);
  };

  return {
    timeRemaining,
    restartTimer,
  };
};

export default useGameTimer;
