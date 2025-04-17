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

export const Appetizers = () => {
  const [foods, setFoods] = useState<MovieDataTypes[]>([]);
  const fetchFoods = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}food/68009ef1b62026487333f1be`
    );
    setFoods(res.data.Foods);
  };
  useEffect(() => {
    fetchFoods();
  }, []);
  console.log(foods);

  const cardsData = foods?.slice(0, 6);

  return (
    <div className="h-full w-full flex flex-col gap-[10px]">
      <p className="text-white">Appetizers</p>
      <div className="grid grid-cols-3 gap-[16px] h-full w-full">
        {cardsData?.map((card) => (
          <Cards
            key={card.id}
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
