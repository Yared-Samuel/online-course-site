import React from "react";
import { BookOpen, BadgeIcon, GraduationCap } from "lucide-react";
import Image from "next/image";
const SideNav = () => {
  const menu = [
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
    },
    {
      id: 2,
      name: "Menbership",
      icon: BadgeIcon,
    },
    {
      id: 3,
      name: "Be Instructor",
      icon: GraduationCap,
    },
  ];
  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <Image src="/logo.svg" alt="logo" width={170} height={60}></Image>
      <hr className="mt-5"></hr>
      {/* Menu List */}
      <div className="mt-8">
        {menu.map((item, index) => (
          <div
            key={index}
            className="group flex gap-3 mt-2 p-3 text-[18px] items-center text-gray-500 cursor-pointer
                hover:bg-primary
                hover:text-white 
                rounded-md transition-all ease-in-out duration-200
                "
          >
            <item.icon className="group-hover:animate-bounce"/>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
