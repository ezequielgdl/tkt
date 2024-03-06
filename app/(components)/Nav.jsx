"use client";

import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  return (
    <nav className="bg-black text-white flex p-3 justify-between items-center">
      <Link href="/" className="font-black text-3xl">
        Ψ TKT
      </Link>
      {session ? (
        <>
          <Link className="hover:text-Accent" href="/dashboard">
            {session?.user?.name}{" "}
          </Link>
          <div>
            <Link className="mr-4 hover:text-Accent" href="/events/new">
              + Nuevo Evento +
            </Link>
            <button className="hover:text-Accent" onClick={() => signOut()}>
              Salir
            </button>
          </div>
        </>
      ) : (
        <>
          {" "}
          <button onClick={() => signIn()}>Entrar</button>
        </>
      )}
    </nav>
  );
};

export default Nav;
