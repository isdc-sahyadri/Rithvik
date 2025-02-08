"use client"; 
import React from "react";
import Image from "next/image";
import { LayoutDashboard, UserCircle } from "lucide-react"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import CreateButton from "./CreateButton";

function SideBar() {
  const menuOption = [
    {
      name: "Dashboard",
      icon: LayoutDashboard, 
      link: "/dashboard",
    },
    {
      name: "Profile",
      icon: UserCircle,
      link: "/dashboard/profile",
    },
  ];

  const pathname = usePathname(); 

  return (
    <div className="w-64 fixed h-screen shadow-md p-5">
      <div>
        <Image src={"/logo.svg"} alt="logo" width={35} height={35} />
        <h2 className="font-medium text-lg">Video Editor</h2>
      </div>

      <ul className="mt-10">
        <CreateButton/>
        {menuOption.map((option, index) => (
          <Link href={option.link} key={index} className="block">
            <li
              className={`flex gap-2 items-center p-3 mt-2 hover:bg-slate-200 rounded-lg text-gray-500 hover:text-black cursor-pointer 
              ${pathname === option.link ? "bg-primary text-white" : ""}
              `}
            >
              <option.icon className="w-5 h-5" />
              {option.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
