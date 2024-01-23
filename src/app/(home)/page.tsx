"use client"

import { logout } from "@/actions/auth/logout";
import { useCurrentUser } from "@/hooks/use-current-user";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const user = useCurrentUser();

  const onUpLoadDb = () => {

  }

  return (
    <main className="flex items-center justify-center w-full h-full ">
      <button onClick={onUpLoadDb}>load</button>
      <div className="flex flex-col gap-5 w-full max-w-[800px]">
        {[1, 2, 3].map(item => {
          return <>
            <div className="duration-300 transition-all hover:scale-110 relative bg-white flex justify-center py-4 rounded-lg shadow-md">
              <span>🐶 Clientes</span>
              <input className="cursor-pointer absolute top-0 right-0 bottom-0 left-0 opacity-0" type="file" />
            </div>
          </>
        })}
      </div>
    </main>
  );
}
