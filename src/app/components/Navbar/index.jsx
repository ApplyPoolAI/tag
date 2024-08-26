"use client";
import React, { useState } from "react";

let logo = "./tag-logo-dark.png";

import Popup from "./Popup";
import Icon from "./Icon";

export default function Navbar({ theme, data = null }) {
  const [isActive, setisActive] = useState(0);
  const [isMenu, setIsMenu] = useState(false);
  const navArray = [
    {
      label: "Platforms",
      url: "/#platformsSec",
      target: "",
    },
    {
      url: "https://api.whatsapp.com/send/?phone=447361901027&text&type=phone_number&app_absent=0",
      target: "_blank",
      icon: "./whatsapp.svg",
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
        theme === "dark" ? "text-white bg-main" : "text-main bg-white"
      } w-full relative top-0 left-0 flex items-center h-fit py-5 sm:py-[1.5vw] justify-between font-Satoshi whitespace-nowrap px-5 sm:px-0`}
    >
      <div>
        <a href="/" className="group flex relative">
          <img src={logo} alt="" className={`relative z-20 h-10 sm:h-14`} />
          <span className="top-1/2 -translate-y-1/2 block absolute z-10 left-full  w-0 group-hover:w-[250px] overflow-hidden transition-all duration-0">
            <span
              className={`block -translate-x-full group-hover:translate-x-0 transition-all duration-500 text-base sm:text-2xl ${
                theme === "dark" ? "text-white" : "text-main "
              }`}
            >
              The Apply Group
            </span>
          </span>
          {/* <span className={`${theme === "dark" ? "bg-main" : "bg-light "} absolute z-30 right-full top-0 h-full w-40`}></span> */}
        </a>
      </div>
      <div className="flex-1 gap-8 justify-end items-center hidden sm:flex">
        {(data || navArray).map((item, index) => {
          return (
            <a
              href={item.url}
              target={item.target}
              key={index}
              className="relative"
            >
              <Icon
                theme={theme}
                index={index}
                isActive={isActive}
                setActive={setActive}
              >
                {item.label && item.label}
                {item.icon && (
                  <div className="h-8 w-8 relative">
                    <img
                      className="absolute h-8 w-8 object-contain flex-shrink-0"
                      src={item.icon}
                      alt="icon"
                    />
                  </div>
                )}
              </Icon>
              {item.new && (
                <span className="absolute -right-4 -top-5 bg-[#f90842] leading-[1.2] px-3 py-1 rounded-full text-white text-sm">
                  new
                </span>
              )}
            </a>
          );
        })}
      </div>

      <button className={`flex sm:hidden text-3xl bg-transparent p-0 `}>
        <Popup
          handleMenuClick={handleMenuClick}
          isMenu={isMenu}
          theme={theme}
          navArray={data || navArray}
        />
      </button>

      <span
        className={`${
          theme === "dark" ? "" : ""
        } absolute bottom-0 rounded-full left-1/2 -translate-x-1/2 w-full`}
      ></span>
    </nav>
  );
}
