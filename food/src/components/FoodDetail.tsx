"use client";
import React, { useState } from "react";
import { X, Minus, Plus } from "lucide-react";

type Props = {
  foodDetails: {
    image: string;
    name: string;
    price: number;
    ingredients: string;
    id: string;
  };
  onClose: () => void;
};

function FoodDetails({ foodDetails, onClose }: Props) {
  const [quantity, setQuantity] = useState(0);
  const max = 200;
  const min = 0;

  const handleIncrease = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="w-[826px] h-[412px] rounded-[20px] bg-white flex p-[24px] justify-between gap-[24px]">
      <div>
        <img
          className="w-[700px] h-[364px] rounded-[12px]"
          src={foodDetails.image}
          alt={foodDetails.name}
        />
      </div>
      <div className="flex flex-col justify-between w-full pl-6">
        <div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="w-[36px] h-[36px] flex justify-center items-center border rounded-full border-[#E4E4E7] bg-white"
            >
              <X className="size-[16px]" />
            </button>
          </div>

          <p className="text-[#EF4444] text-[30px] font-[600]">
            {foodDetails.name}
          </p>
          <p className="text-black text-[16px] font-[400]">
            {foodDetails.ingredients}
          </p>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[16px] font-[400]">Total price</p>
              <p className="text-[24px] font-[600]">
                ${(foodDetails.price * quantity).toFixed(2)}
              </p>
            </div>
            <div className="flex gap-[12px] items-center">
              <button
                onClick={handleDecrease}
                disabled={quantity === min}
                className={`w-[44px] h-[44px] flex justify-center items-center border-[1.2px] rounded-full bg-white ${
                  quantity === min ? "border-[#E4E4E7]" : "border-black"
                }`}
              >
                <Minus className="size-[16px]" />
              </button>
              <p>{quantity}</p>
              <button
                onClick={handleIncrease}
                disabled={quantity === max}
                className={`w-[44px] h-[44px] flex justify-center items-center border-[1.2px] rounded-full bg-white ${
                  quantity === max ? "border-[#E4E4E7]" : "border-black"
                }`}
              >
                <Plus className="size-[16px]" />
              </button>
            </div>
          </div>
          <button className="text-white text-[14px] font-[500] bg-black py-[8px] px-[32px] rounded-[999px] w-[377px]">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
