import { removeCookies } from '@/helpers/cookie';
import jwt from 'jsonwebtoken';
import { toast } from 'react-toastify';

export const isTokenExpired = token => {
  try {
    const decoded = jwt.decode(token);
    if (!decoded || !decoded.exp) {
      return true;
    }
    const currentTime = new Date().getTime() / 1000;

    return decoded.exp < currentTime;
  } catch (error) {
    console.error('Error checking token expiration', error);
    return true;
  }
};

export const handleLogout = async () => {
  await removeCookies('fit_form_token');
  toast.success('Logout Successfully');
  if (typeof window !== 'undefined') {
    window.location.replace('/login');
  }
};
