import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AuthLayout({ children }) {
  return (
    <div
      className="flex z-11 overflow-hidden justify-evenly relative items-center h-[100vh] w-[100%]"
      style={{
        backgroundImage: 'url(/auth-bg.png)',
        backgroundSize: '',
        backgroundPosition: 'center',
      }}
    >
      <div className="overlay"></div>
      <div className="font-custom font-bold text-6xl text-[#002C4C] absolute top-14 left-[48%]">
        Welcome!
      </div>
      <div className="z-10">
        <Image src="/tycher-logo.png" width={200} height={200} alt="tycher-logo" />
      </div>
      <div className="">{children}</div>
      <div className="absolute">
        <ToastContainer />
      </div>
    </div>
  );
}
