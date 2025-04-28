"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { Cards } from "./Cards";
import FoodDetails from "./FoodDetail";

type FoodDataTypes = {
  image: string;
  id: string;
  name: string;
  price: number;
  ingredients: string;
};

export const LunchFavorites = () => {
  const [foods, setFoods] = useState<FoodDataTypes[]>([]);
  const [selectedFood, setSelectedFood] = useState<FoodDataTypes | null>(null);
  const fetchFoods = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}food/6805baf22e58abc0de86b8a6`
    );

    setFoods(res.data.foods);
  };
  useEffect(() => {
    fetchFoods();
  }, []);

  const cardsData = foods?.slice(0, 6);

  return (
    <div className="h-full w-full flex flex-col gap-[54px] pb-[54px]">
      <p className="text-white text-[30px] font-[600]">Lunch favorites</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[36px]  ">
        {cardsData?.map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            name={card.name}
            price={card.price}
            ingredients={card.ingredients}
            id={card.id}
            onClick={() => setSelectedFood(card)}
          />
        ))}
      </div>
      {selectedFood && (
        <div className="fixed inset-0 z-1 flex items-center justify-center bg-[rgba(24,24,27,0.4)]">
          <FoodDetails
            foodDetails={selectedFood}
            onClose={() => setSelectedFood(null)}
          />
        </div>
      )}
    </div>
  );
};
