import { useEffect, useState } from 'react';

// this component is used to create a countdown timer for all success messages.

const useCountdown = (initialCountdown, condition, callback) => {
  const [countdown, setCountdown] = useState(initialCountdown);
  // console.log(countdown);
  // countdown to closing sentence
  useEffect(() => {
    const timer = setInterval(() => {
      if (condition) {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [condition]);

  // condition to success message closure
  useEffect(() => {
    if (countdown === 0) {
      callback();
      setCountdown(initialCountdown);
    }
  }, [countdown, initialCountdown]);

  return countdown;
};

export default useCountdown;
