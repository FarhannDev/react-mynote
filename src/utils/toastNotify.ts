import { Bounce, toast } from 'react-toastify';

export type Position =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

export type Theme = 'light' | 'dark' | 'colored';

export type Type = 'info' | 'success' | 'warning' | 'error' | 'default';

const toastNotify = (
  position: Position = 'top-right',
  theme: Theme = 'light',
  type: Type = 'default',
  message: string
) => {
  toast(message, {
    position,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme,
    transition: Bounce,
    type,
  });
};

export default toastNotify;
