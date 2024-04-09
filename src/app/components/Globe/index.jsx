'use client'

import React from "react";

function Avatar({ img, pos, stroke = "#ffffff", size = "big", duration = 20, label }) {
  return (
    <div className={`absolute aspect-square ${pos} z-50 scale-[.6] sm:scale-100`}>
      <img src={img} alt="" className="block w-[70%] aspect-square rounded-full absolute absCenter z-30" />

      <div className={`absolute aspect-square bg-main absCenter rounded-full z-20 ${size === "big" ? 'w-[85%]' : 'w-[90%]'}`}></div>
      <div className="absolute w-[100%] rotateCenter aspect-square rounded-full z-10" style={{ background: `linear-gradient(to bottom, ${stroke}, ${stroke}50 40%, ${stroke}00 80%)`, animationDuration: `${duration}s` }}></div>
      <div className="absolute w-[100%] rotateCenter aspect-square rounded-full z-0 blur-xl" style={{ background: `linear-gradient(to bottom, ${stroke}, ${stroke}50 40%, ${stroke}00 80%)`, animationDuration: `${duration}s` }}></div>

      <div className="absolute z-50 top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 sm:min-h-10 flex items-center">
        <div className="absolute bg-main left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] blur-[4px] sm:blur-[10px] rounded-full shadow-2xl shadow-main"></div>
        <div className="relative z-40 capitalize leading-none text-center sm:px-1 sm:py-1 text-[12px] sm:text-[0.7vw] font-medium">{label}</div>
      </div>
    </div>
  )
}

function WaveButton({ img, pos }) {
  return (
    <div className={`w-8 sm:w-16 p-[10px] rounded-full flex justify-center items-center absolute aspect-square ${pos}`}>
      <div className="relative z-50">
        <img src={img} alt="" className="w-full" />
      </div>
      <div className="w-full h-full rounded-full absolute absCenter z-30" style={{ background: "linear-gradient(-45deg, #0057FF, #009FFF)" }}></div>
      <div className="w-full h-full bg-[#0085D750] rounded-full absolute waveCenter z-20" style={{ animationDelay: "2s" }}></div>
      <div className="w-full h-full bg-[#0085D750] rounded-full absolute waveCenter z-10"></div>
    </div>
  )
}

function Dot({ pos }) {
  return (
    <div className={`w-1 h-1 sm:w-3 sm:h-3 bg-white absolute rounded-full z-10 ${pos}`}>
    </div>
  )
}

function Circle({ pos, children }) {
  return (
    <div className={`rounded-full border aspect-square flex items-center justify-center relative ${pos}`}>
      {children}
    </div>
  )
}

function Opportunity({ pos, head, sub, loc, img }) {
  return (
    <div className={`absolute z-50 ${pos} hidden sm:flex items-center gap-6 px-4 py-2 border-2 border-sec bg-[#131E4290] rounded-xl`}>
      <div>
        <img src={img} alt="" className="w-[3vw] aspect-square" />
      </div>
      <div className="">
      <p className="text-base sm:text-[0.7vw] font-light uppercase">{loc}</p>
      <h1 className="py-1 text-[1.2vw] max-w-[14vw] leading-none font-bold">{head}</h1>
      <p className="text-base sm:text-[0.7vw] font-light uppercase">{sub}</p>
      </div>
    </div>
  )
}


export default function Globe({ theme }) {

  return (
    <div className={`overflow-hidden my-16 sm:my-2 pt-32 pb-5 sm:pt-32 sm:pb-32 relative ${theme === "light" && 'opacity-0'}`}>

      {/* heading with shadow */}
      <div className="px-5 sm:px-0 h-1/3 w-full z-10 absolute top-0 sm:top-24 left-0 flex flex-col items-center gap-3 sm:gap-6 pt-4 sm:pt-32 text-center" style={{ background: `linear-gradient(to bottom, #131E42 50%, #131E4280)` }}>
        <h1 className="text-2xl sm:text-[3vw] font-semibold">
        We make opportunities circle around you.
        </h1>
        <p className="text-sm sm:text-xl font-normalF sm:max-w-[80ch] font-light">
        We empower you to be the central focus, so the right schools, colleges, universities, scholarships, internships, employers, mentors and coaches can find you. Why search when you can be found?
        </p>
      </div>

      {/* bottom shadow */}
      <div className="h-1/3 w-full z-10 absolute bottom-0 left-0" style={{ background: `linear-gradient(to top, #131E42 , #131E4280)` }}></div>

      {/* circles */}
      <div className="w-full h-full flex items-center justify-center pt-16 sm:pt-0">
        <Circle pos={"p-[60px] sm:p-[5vw] border-[#ffffff10]"}>
          
          <Circle pos={"p-[25px] sm:p-[10vw] border-[#ffffff00]"}>
            <div className="w-full h-full absolute rotateCenter border border-[#ffffff50] rounded-full" style={{ animationDuration: "50s" }}>
              <Dot pos={"right-[20%] top-[90%] -translate-y-1/2 translate-x-1/2"} />
              <Dot pos={"left-[20%] top-[90%] -translate-y-1/2 -translate-x-1/2"} />
            </div>
            <Avatar pos={"w-[75px] sm:w-[8.5vw] left-[3%] top-[32%] -translate-y-1/2 -translate-x-1/2"} img="./icons/medical school.png" stroke="#C80815" label={"Medical School"} duration={5}/>
            <Avatar pos={"w-[75px] sm:w-[8.5vw] left-[20%] top-[90%] -translate-y-1/2 -translate-x-1/2"} img="./icons/design.png" stroke="#FFFFFF" label={"Design"} />
            <Avatar pos={"w-[75px] sm:w-[8.5vw] right-[5%] top-[25%] -translate-y-1/2 translate-x-1/2"} img="./icons/law school.png" stroke="#FFFFFF" label={"Law School"}  duration={15}/>

            <Opportunity pos={"left-[10%] top-[70%] -translate-y-1/2 -translate-x-1/2"} head="Junior Software Engineer" sub="CybSecure Group" loc="Hybrid - UAE" img="./company1.png" />
            <Opportunity pos={"right-[20%] top-[95%] -translate-y-1/2 translate-x-1/2"} head="Junior Operations Manager" sub="MegaMeta Inc." loc="Hybrid - New York" img="./company2.png" />
            <Opportunity pos={"right-[5%] top-[52%] -translate-y-1/2 translate-x-1/2"} head="12 Month Internship" sub="Hybrid - London " loc="SpaceUp UK" img="./company3.png" />

            <Circle pos={"p-[50px] sm:p-[8vw] border-[#ffffff00]"}>
              <div className="w-full h-full absolute rotateCenter border border-[#ffffff70] rounded-full" style={{ animationDuration: "40s" }}>
                <Dot pos={"right-[10%] top-[20%] -translate-y-1/2 translate-x-1/2"} />
              </div>

              <Avatar pos={"w-[75px] sm:w-[8.5vw] left-[2%] top-[52%] -translate-y-1/2 -translate-x-1/2"} img="./icons/banking.png" stroke="#ffffff" label={"Banking"} />
              <Avatar pos={"w-[70px] sm:w-[8vw] right-[12%] top-[84%] -translate-y-1/2 translate-x-1/2"} img="./icons/social science.png" stroke="#ffffff" label={"social science"} duration={10} />
              <Avatar pos={"w-[60px] sm:w-[7vw] right-[55%] top-[98%] -translate-y-1/2 translate-x-1/2"} img="./icons/electrical engineering.png" stroke="#C80815"label={"electrical engineering"} duration={5} />

              <Circle pos={"p-[30px] sm:p-[6vw] border-[#ffffff00]"}>
                <div className="w-full h-full absolute rotateCenter border border-[#ffffff90] rounded-full" style={{ animationDuration: "50s" }}>
                  <Dot pos={"left-[4%] top-[30%] -translate-y-1/2 -translate-x-1/2"} />
                  <Dot pos={"left-[20%] top-[90%] -translate-y-1/2 -translate-x-1/2"} />
                </div>

                <Avatar pos={"w-[70px] sm:w-[7vw] left-[30%] top-[5%] -translate-y-1/2 -translate-x-1/2"} img="./icons/multiple offers.png" stroke="#ffffff" label={"Multiple Offers"}/>
                <Avatar pos={"w-[80px] sm:w-[8vw] right-[4%] top-[40%] -translate-y-1/2 translate-x-1/2"} img="./icons/mentors.png" stroke="#C80815" label={"Mentors"} duration={15} />

                {/* Globe Center */}
                <img src="./globe-center.png" alt="" className="min-w-[80px] bg-light rounded-full relative z-[100]" />
              </Circle>

            </Circle>
          </Circle>
        </Circle>

      </div>
    </div>
  );
}
