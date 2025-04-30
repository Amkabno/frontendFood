"use client";
import React, { useState } from "react";

export const NavigationLogin = () => {
  return (
    <div>
      <nav className="flex fixed z-1 justify-between items-center w-full h-[68px] bg-[#18181b] py-[12px] px-[88px]">
        <div>
          <a href="/" className="flex gap-[12px]">
            <img src="NomNom.svg" alt="Logo" />
            <div className="flex flex-col">
              <div className="flex">
                <p className="text-white text-[20px] font-[600]">Nom</p>
                <p className="text-[#ef4444] text-[20px] font-[600]">Nom</p>
              </div>
              <p className="text-white text-[12px] font-[400]">
                Swift delivery
              </p>
            </div>
          </a>
        </div>

        <div className="flex gap-[13px]">
          <a className="text-black text-[14px] font-[500] w-object-fit h-object-fit py-[9px] px-[12px] rounded-full bg-white">
            Sign up
          </a>
          <a className="text-white text-[14px] font-[500] w-object-fit h-object-fit py-[9px] px-[12px] rounded-full bg-[#EF4444]">
            Log in
          </a>
        </div>
      </nav>
    </div>
  );
};
