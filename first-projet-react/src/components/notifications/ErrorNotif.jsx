import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ErrorNotif() {
    const notify = () => toast.warn("Ceci est une demande en double", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
  return (
      {notify}
  )
}
