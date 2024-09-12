"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ContactBtn = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`z-[100000000] bg-main text-white fixed right-0 top-1/2 -translate-y-1/2 flex flex-col overflow-hidden w-10 rounded-[.5rem_0_0_.5rem]`}
    >
      <button
        onClick={() => {
          setActive(!active);
        }}
        className="bg-main cursor-pointer px-1 py-1 flex justify-center items-center"
      >
        →
      </button>
      <Link
        href={
          "https://calendly.com/tagmeeting/intro"
        }
        className={` ${
          active === false ? "" : "hidden translate-x-full"
        }  px-2 py-2 bg-main flex flex-col justify-center items-center transition-transform`}
      >
        <span
          className="px-1 py-3 flex justify-center items-center"
          style={{ writingMode: "vertical-lr" }}
        >
          Book Demo
        </span>
        {/* <Image
          src="./whatsapp.svg"
          alt="icon"
          width={50}
          height={50}
          className="w-7"
        /> */}
      </Link>
    </div>
  );
};

export default ContactBtn;
