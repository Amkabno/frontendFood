import React from "react";
interface CardProps {
  image: string;
  name: string;
  price: number;
  ingredients: string;
}

export const Cards: React.FC<CardProps> = ({
  image,
  name,
  price,
  ingredients,
}) => {
  return (
    <div>
      <button className=" h-[342px] w-[397px] rounded-[20px] bg-white ">
        <div className="flex flex-col p-[16px]">
          <img src={image} className="" alt={name}></img>
          <div className="flex">
            <a>{name}</a>
            <a>${price}</a>
          </div>
          <a>{ingredients}</a>
        </div>
      </button>
    </div>
  );
};
