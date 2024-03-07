import toast from 'react-hot-toast';

export default function warning() {
  toast.error('Please enter a searchquery', {
    duration: 2000,
    icon: '⚠️',
  });
}
