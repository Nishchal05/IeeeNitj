"use client";

import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function SplashScreen() {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      setIsWideScreen(window.innerWidth > 625);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    // Lock scroll
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("resize", checkWidth);
      document.body.style.overflow = "auto"; // fallback unlock
    };
  }, [showSplash]);

  if (!showSplash) return null;

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center z-[9999] fixed top-0 left-0 overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #004E92 30%, #000428 95%)",
      }}
    >
      {isWideScreen ? (
        <div className="w-full h-full flex">
          <div
            className="mx-auto w-10/12 h-[98vh] rounded-tl-[65px] rounded-tr-[65px] border border-black overflow-clip relative"
            style={{
              background: "rgba(217, 217, 217, 0.10)",
              boxShadow:
                "75.23px -75.23px 75.23px 0px rgba(165, 165, 165, 0.10) inset, -75.23px 75.23px 75.23px 0px rgba(255, 255, 255, 0.10)",
              backdropFilter: "blur(75.2302017211914px)",
            }}
          >
            <img
              src="/cover.svg"
              alt=""
              className="relative w-[95%] mt-10 mx-auto"
            />
            <div className="absolute top-0 overflow-clip w-full h-full">
              <img
                src="/Frame 2270.png"
                alt=""
                className="relative z-[1000] w-[88%] h-[85vh] mx-auto mt-10 bg-transparent"
                style={{
                  fill: "#fff",
                  strokeWidth: "2.167px",
                  stroke: "rgba(190, 209, 250, 0.15)",
                  filter:
                    "drop-shadow(0px 4.334px 4.334px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4.334px 4.334px rgba(0, 0, 0, 0.25))",
                }}
              />
              <img
                src="/Group 60.svg"
                alt=""
                className="absolute left-20 top-24"
              />
              <img
                src="/Group 61.svg"
                alt=""
                className="absolute right-20 top-24"
              />
              <div className="absolute bottom-24 text-center w-full">
                <div
                  className="text-black text-4xl w-[78%] mx-auto"
                  style={{
                    textShadow: "0px 4.334px 4.334px rgba(0, 0, 0, 0.25)",
                    fontFamily: "Michroma",
                  }}
                >
                  EMPOWERING TOMORROW’S INNOVATORS AT NIT JALANDHAR!
                </div>
                <div
                  className="mt-5 text-black text-xl w-[78%] mx-auto"
                  style={{ fontFamily: "Michroma" }}
                >
                  Connect.Learn.Innovate.Lead
                </div>
                <img
                  src="/ellipse.svg"
                  alt=""
                  className="mx-auto mt-5 w-[28%] h-[28%] animate-spin-slow"
                  style={{
                    strokeWidth: "10.835px",
                    stroke: "#000",
                  }}
                />
              </div>
            </div>
            <div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black cursor-pointer"
              onClick={() => setShowSplash(false)}
            >
              <FaAngleDown size={40} className="animate-bounce" />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full flex flex-col items-center mx-auto">
          <img
            src="/Rectangle 89.png"
            alt=""
            className="w-[96%] h-full mt-20 mx-auto"
          />
          <div className="absolute top-0 flex flex-col justify-center items-center">
            <div
              className="mt-44 text-black text-3xl font-semibold max-w-[80%] text-center"
              style={{
                textShadow: "0px 4.334px 4.334px rgba(0, 0, 0, 0.25)",
                fontFamily: "Michroma",
              }}
            >
              EMPOWERING TOMORROW’S INNOVATORS AT NIT JALANDHAR!
            </div>
            <div
              className="mt-16 text-black text-xl text-center"
              style={{ fontFamily: "Michroma" }}
            >
              Connect.Learn.Innovate.Lead
            </div>
            <img
              src="/ellipse.svg"
              alt=""
              className="mx-auto mt-16 w-[70%] h-[70%] animate-spin-slow"
              style={{
                strokeWidth: "10.835px",
                stroke: "#000",
              }}
            />
            <div
              className="mt-8 text-black cursor-pointer"
              onClick={() => setShowSplash(false)}
            >
              <FaAngleDown size={36} className="animate-bounce" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
