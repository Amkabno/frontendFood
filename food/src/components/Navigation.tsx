"use client";
import React, { useState } from "react";
import { ShoppingCart, User, MapPin, ChevronRight } from "lucide-react";
import Address from "./Address";

export const Navigation = () => {
  const [focused, setFocused] = useState(false);
  const [showAddressCard, setShowAddressCard] = useState(false);
  const [address, setAddress] = useState("");

  return (
    <nav className="flex fixed z-1 justify-between items-center w-full h-[68px] bg-[#18181b] py-[12px] px-[88px]">
      <div>
        <a href="/" className="flex gap-[12px]">
          <img src="NomNom.svg" alt="Logo" />
          <div className="flex flex-col">
            <div className="flex">
              <p className="text-white text-[20px] font-[600]">Nom</p>
              <p className="text-[#ef4444] text-[20px] font-[600]">Nom</p>
            </div>
            <p className="text-white text-[12px] font-[400]">Swift delivery</p>
          </div>
        </a>
      </div>

      <div className="flex items-center gap-[12.8px]">
        <button
          className="flex items-center bg-white rounded-full w-[260px] h-[36px] px-[10px] gap-[4px]"
          onClick={() => setShowAddressCard(true)}
        >
          <MapPin className="text-[#ef4444] size-[20px]" />
          {!focused && (
            <span className="text-[#ef4444] text-[13px] font-[400] whitespace-nowrap">
              Delivery address:
            </span>
          )}
          <input
            type="text"
            readOnly
            value={address}
            placeholder="Add Location"
            className={` outline-none text-[13px] font-[400] placeholder-gray-500 duration-300 ${
              focused ? "w-full" : "w-[80px]"
            }`}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <ChevronRight className="text-gray-500 size-[20px]" />
        </button>

        <a className="w-[36px] h-[36px] bg-white flex justify-center items-center rounded-full">
          <ShoppingCart className="size-[16px]" />
        </a>

        <button className="w-[36px] h-[36px] bg-[#ef4444] flex justify-center items-center rounded-full">
          <User className="text-white size-[16px]" />
        </button>
      </div>
      {showAddressCard && (
        <div className="fixed inset-0 z-10 bg-opacity-30 flex items-center justify-center">
          <Address
            onClose={() => setShowAddressCard(false)}
            onSave={(newAddress) => {
              setAddress(newAddress);
              setShowAddressCard(false);
            }}
          />
        </div>
      )}
    </nav>
  );
};
