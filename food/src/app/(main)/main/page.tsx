import React from "react";
import { Appetizers } from "@/components/Appetizers";
import { Salads } from "@/components/Salads";
import { LunchFavorites } from "@/components/LunchFavorites";
import { MainDishes } from "@/components/MainDishes";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackGroundImg } from "@/components/BackGroundImg";

function ResetPassPage() {
  return (
    <div className="flex h-full w-full bg-[#232323]  flex-col">
      <Navigation />
      <BackGroundImg />
      <div className="flex flex-col p-6">
        <Appetizers />
        <Salads />
        <LunchFavorites />
        <MainDishes />
      </div>
      <Footer />
    </div>
  );
}
export default ResetPassPage;
