import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="z-10 w-full  items-center  justify-center font-mono text-sm flex flex-col">
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert hidden md:block"
        width={100}
        height={24}
        priority
      />
      <h4 className="md:my-12 my-2 text-2xl font-semibold">ETKİNLİKLER</h4>
    </div>
  );
}

export default Header;
