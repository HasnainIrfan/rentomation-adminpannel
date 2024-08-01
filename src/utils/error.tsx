import { toast } from 'react-toastify';

export const ErrorMessage = (error: { data?: { message?: string } } = {}) => {
  if (error && error.data) {
    toast.error(error.data.message ?? 'Something went wrong');
  } else {
    toast.error('Something went wrong');
  }
};
