import Image from 'next/image';

export default function AuthLayout({ children }) {
  return (
    <div
      className="flex justify-evenly items-center h-[100vh]"
      style={{
        backgroundImage: 'url(/auth-bg.png)',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
      }}
    >
      <div className="">
        <Image
          src="/tycher-logo.png"
          width={200}
          height={200}
          alt="tycher-logo"
        />
      </div>
      <div className="">
        {/* <div>Welcome!</div> */}
        {children}
      </div>
    </div>
  );
}
