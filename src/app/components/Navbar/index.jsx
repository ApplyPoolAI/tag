'use client'
import React, { useState } from "react";

let logo = "./tag-logo.png";

import Popup from "./Popup";
import Icon from "./Icon";

export default function Navbar({ theme }) {
  const [isActive, setisActive] = useState(0);
  const [isMenu, setIsMenu] = useState(false);
  const navArray = [
    {
      label: "Home",
      url: "/",
      target:""
    },
    {
      label: "Platforms",
      url: "/#platformsSec",
      target:""
    },
    {
      label: "Contact",
      url: "/#contactSec",
      target:""
    },
  ];

  const setActive = (index) => {
    setisActive(index);
  };

  const handleMenuClick = () => {
    setIsMenu(!isMenu);
  };

  return (
    <nav
      className={`${
        theme === "dark" ? "text-white" : "text-black "
      } w-full relative top-0 left-0 flex items-center h-fit py-[1.5vw] justify-between font-Satoshi whitespace-nowrap px-5 sm:px-0`}
    >
      <div>
        <a href="/">
          <img src={logo} alt="" className="h-10 sm:h-14" />
        </a>
      </div>
      <div className="flex-1 gap-8 justify-end items-center hidden sm:flex">
        {navArray.map((item, index) => {
          return (
          <a href={item.url} target={item.target} key={index} className="relative">
            <Icon
              theme={theme}
              index={index}
              isActive={isActive}
              setActive={setActive}
            >
              {item.label}
            </Icon>
            {item.new && <span className="absolute -right-4 -top-5 bg-[#f90842] leading-[1.2] px-3 py-1 rounded-full text-white text-sm">new</span>}
          </a>
          );
        })}
      </div>

      <button className="flex sm:hidden text-3xl bg-transparent p-0">
        <Popup
          handleMenuClick={handleMenuClick}
          isMenu={isMenu}
          navArray={navArray}
        />
      </button>

      <span
        className={`${
          theme === "dark" ? "" : ""
        } border-gray-c5 absolute bottom-0 rounded-full left-1/2 -translate-x-1/2 border-b w-full`}
      ></span>
    </nav>
  );
}
