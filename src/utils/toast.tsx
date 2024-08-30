// Toast
import { toast } from 'react-hot-toast';

const MESSAGE_TYPE = {
  error: 'error',
  success: 'success',
};

export const showToast = ({ type = MESSAGE_TYPE.success, message = '' }) => {
  switch (type) {
    case MESSAGE_TYPE.error:
      toast.error(message, { duration: 3000 });
      break;
    case MESSAGE_TYPE.success:
      toast.success(message, { duration: 3000 });
      break;
    default:
      toast.custom(message, { duration: 3000 });
      break;
  }
};
