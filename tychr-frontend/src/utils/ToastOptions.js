import { toast } from 'react-toastify';

export const showToast = (message, type) => {
  switch (type) {
    case 'error':
      toast.error(message, toastOptions);
      break;
    case 'warn':
      toast.warn(message, toastOptions);
      break;
    case 'success':
      toast.success(message, toastOptions);
      break;
    default:
      toast(message, toastOptions); // Default toast type
  }
};

export const toastOptions = {
  position: 'bottom-right',
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  //   theme: 'dark',
};
