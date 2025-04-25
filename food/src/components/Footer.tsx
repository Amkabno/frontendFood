import React from "react";
import { Instagram } from "lucide-react";

export const Footer = () => {
  const text = Array.from({ length: 20 }, () => "Fresh fast delivered");

  return (
    <div className="w-full h-[700px] bg-[#18181B] ">
      <div className="pt-[60px]">
        <div className="w-full h-[80px] bg-[#ef4444] overflow-hidden relative flex items-center">
          <div className="scroll-text flex gap-[36px] whitespace-nowrap px-[36px]">
            {text.map((text, index) => (
              <span key={index} className="text-white text-[30px] font-[600]">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-[88px] pt-[76] ">
        <div className="flex  gap-[20px]  ">
          <a href="/" className="flex flex-col gap-[12px]">
            <div>
              <img src="NomNom.svg" />
            </div>
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

          <div className="flex flex-col gap-[16px] pl-[220px]">
            <p className="text-[16px] font-[400] text-[#71717A]">NOMNOM</p>
            <a className="text-[16px] font-[400] text-white">Home</a>
            <a className="text-[16px] font-[400] text-white">Contact us</a>
            <a className="text-[16px] font-[400] text-white">Delivery zone</a>
          </div>
          <div className="flex flex-col gap-[16px] pl-[112px]">
            <p className="text-[16px] font-[400] text-[#71717A]">MENU</p>{" "}
            <div className="flex gap-[56px]">
              <div className="flex flex-col gap-[16px]">
                <a className="text-[16px] font-[400] text-white">Appetizers</a>
                <a className="text-[16px] font-[400] text-white">Salads</a>
                <a className="text-[16px] font-[400] text-white">Pizzas</a>
                <a className="text-[16px] font-[400] text-white">Main dishes</a>
                <a className="text-[16px] font-[400] text-white">Desserts</a>
              </div>
              <div className="flex flex-col gap-[16px] pl-[56px]">
                <a className="text-[16px] font-[400] text-white">Side dish</a>
                <a className="text-[16px] font-[400] text-white">Brunch</a>
                <a className="text-[16px] font-[400] text-white">Beverages</a>
                <a className="text-[16px] font-[400] text-white">
                  Lunch favorites
                </a>
                <a className="text-[16px] font-[400] text-white">
                  Fish & Sea foods
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col pl-[112px] gap-[16px]">
            <p className="text-[16px] font-[400] text-[#71717A]">FOLLOW US</p>
            <div className="flex items-center gap-[16px]">
              <a>
                <img src="facebook.png" className="size-[31px]" />
              </a>
              <a>
                <Instagram className="text-white stroke-[2px] size-[28px]" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex pt-[104px]">
          <div className="w-full h-[1px] bg-[#707072]  "></div>
        </div>

        <div className="flex gap-[48px] pt-[32px]">
          <a className="text-[14px] font-[400] text-[#71717A]">
            Copy right 2024 © Nomnom LLC
          </a>
          <a className="text-[14px] font-[400] text-[#71717A]">
            Privacy policy
          </a>
          <a className="text-[14px] font-[400] text-[#71717A]">
            Terms and conditoin
          </a>
          <a className="text-[14px] font-[400] text-[#71717A]">Cookie policy</a>
        </div>
      </div>
    </div>
  );
};
