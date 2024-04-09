import React from "react";
import LinkEffect from "../LinkEffect";
import Button from "../Button";

export default function FooterContent() {
  return (
    <div className="flex flex-col gap-10" id="contactSec">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-5">
        <div className="flex gap-2 items-center">
          <a href="/">
          <img className="h-10 sm:h-16" src="./tag-logo.png" alt="" />
          </a>
          <p className="text-lg sm:text-2xl font-semibold">
            Stop Searching<span className="text-sec">.</span> Get Found
            <span className="text-sec">.</span>
          </p>
        </div>
        <div className="flex gap-10 sm:gap-24">
          <div className="text-xl font-medium flex flex-col sm:items-end sm:gap-4">
            <a href="/">
              <LinkEffect text={"LinkedIn"} big={false} />
            </a>
            <a href="/">
              <LinkEffect text={"Instagram"} big={false} />
            </a>
          </div>

          <div className="text-xl font-medium flex flex-col sm:items-end sm:gap-4">
            <a href="/">
              <LinkEffect text={"Privacy"} big={false} />
            </a>
            <a href="/">
              <LinkEffect text={"Terms"} big={false} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="pb-2 text-xl">Reach Us</p>
          <div className="flex gap-4">
            <a href="/">
              <img className="h-8" src="./whatsapp.png" alt="" />
            </a>
            <a href="/">
              <img className="h-8" src="./24tag.png" alt="" />
            </a>
            <a href="/">
              <img className="h-8" src="./uk.png" alt="" />
            </a>
          </div>
        </div>
        <div></div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-5 items-start sm:items-center">
        <Button theme={"light"}>Join for free</Button>

        <div className="flex gap-2 items-center ml-auto sm:ml-0">
          <p className="text-xl font-normal text-gray-400">
          ©2024 The Apply Group Ltd.
          </p>
          <a href="/">
          <img className="w-10" src="./a.png" alt="" />
          </a>
        </div>

      </div>
    </div>
  );
}
