import { toast } from 'react-toastify';

  // create a tost
  export  const creatToast = (msg) => {
    return toast.warn(msg)
  }