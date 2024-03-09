import toast from 'react-hot-toast';
import css from '../ErrorMessage/ErrorMessage.module.css'

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

export default function ErrorMessage() {
  <p className={css.p}>Oops.. Something went wrong</p>
}