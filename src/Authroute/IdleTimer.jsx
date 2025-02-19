import { useEffect } from 'react';
import { useAuth } from './Auth';

const IdleTimer = ({ timeout = 600000 }) => { // Default to 10 minutes
  const { logout } = useAuth();
  let timer;

  const resetTimer = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      logout();
    }, timeout);
  };

  useEffect(() => {
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keypress', resetTimer);

    resetTimer(); // Initialize timer

    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keypress', resetTimer);
      clearTimeout(timer);
    };
  }, []);

  return null;
};

export default IdleTimer;
