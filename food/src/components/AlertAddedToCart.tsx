import React from "react";
import { Check } from "lucide-react";

export const AlertAddedToCart = () => {
  return (
    <div className="w-[292px] h-[48px] rounded-[8px] bg-black border-[1px] border-white">
      <Check />
      <p className="text-white text-[16px] font-[500]">
        Food is being added to the cart
      </p>
    </div>
  );
};
