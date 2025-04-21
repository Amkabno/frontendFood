"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { Cards } from "./Cards";

type MovieDataTypes = {
  image: string;
  id: string;
  name: string;
  price: number;
  ingredients: string;
};

export const Salads = () => {
  const [foods, setFoods] = useState<MovieDataTypes[]>([]);
  const fetchFoods = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}food/6805b0d92e58abc0de86b896`
    );

    setFoods(res.data.foods);
  };
  useEffect(() => {
    fetchFoods();
  }, []);
  console.log(foods);

  const cardsData = foods?.slice(0, 3);

  return (
    <div className="h-full w-full flex flex-col gap-[54px] pb-[54px]">
      <p className="text-white text-[30px] font-[600]">Salads</p>
      <div className="grid grid-cols-3 gap-[36px] ">
        {cardsData?.map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            name={card.name}
            price={card.price}
            ingredients={card.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
