import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-BgColor text-white flex p-3 justify-between">
      <Link href="/" className="font-black text-3xl">
        Ψ TKT
      </Link>
      <Link href="/">LOGIN</Link>
    </nav>
  );
};

export default Nav;
