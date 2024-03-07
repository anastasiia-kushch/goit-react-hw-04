import toast from 'react-hot-toast';

export const warning = () => {
  toast.error('Please enter a searchquery', {
    duration: 1500,
    icon: '⚠️',
  });
}

export const tryAgain = () => {
  toast.error('No results... Try again!', {
    duration: 2000,
    icon: '😭',
  });
}
