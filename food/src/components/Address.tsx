"use client";
import React, { useState } from "react";

type Props = {
  onClose: () => void;
  onSave: (address: string) => void;
};

function Address({ onClose, onSave }: Props) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="w-[480px] h-object-fit rounded-[12px] bg-white flex flex-col p-[24px] justify-between gap-[24px] relative">
      <h2 className="text-xl font-semibold">Delivery address</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Please provide specific address details such as building number, entrance, and apartment number"
        className="p-2 border border-gray-300 rounded h-[112px] w-object-fit"
      />
      <div className="flex gap-4 justify-end mt-auto">
        <button
          className="bg-white border-[1.2px] px-4 py-2 rounded-[6px]"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="bg-[#18181B] text-white px-4 py-2 rounded-[6px]"
          onClick={() => onSave(inputValue)}
        >
          Deliver Here
        </button>
      </div>
    </div>
  );
}

export default Address;
