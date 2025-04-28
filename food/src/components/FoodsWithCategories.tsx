"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { Cards } from "./Cards";
import FoodDetails from "./FoodDetail";

type FoodDataTypes = {
  name: string;
  result: {
    name: string;
    price: number;
    ingredients: string;
    image: string;
    _id: string;
  }[];
};

export const FoodsWithCategories = () => {
  const [foods, setFoods] = useState<FoodDataTypes[]>([]);
  const [selectedFood, setSelectedFood] = useState<any | null>(null);

  const fetchFoods = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}food/68009ef1b62026487333f1be`
    );
    setFoods(res.data.foods);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const cardsData = foods?.slice(0, 6);

  return (
    <div className="h-full w-full flex flex-col relative">
      {cardsData?.map((card, index) => (
        <div key={index} className="text-white text-[30px] font-[600]">
          <p className="py-[54px]">{card.name}</p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-[36px]">
            {card.result?.map((food) => (
              <div key={food._id} className=" flex justify-center">
                <Cards
                  name={food.name}
                  price={food.price}
                  ingredients={food.ingredients}
                  image={food.image}
                  id={food._id}
                  onClick={() => setSelectedFood(food)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedFood && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(24,24,27,0.4)]">
          <FoodDetails
            foodDetails={selectedFood}
            onClose={() => setSelectedFood(null)}
          />
        </div>
      )}
    </div>
  );
};
