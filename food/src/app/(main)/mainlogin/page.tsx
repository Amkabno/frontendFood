import React from "react";
import { FoodsWithCategories } from "@/components/FoodsWithCategories";

import { NavigationLogin } from "@/components/NavigationLogin";
import { Footer } from "@/components/Footer";
import { BackGroundImg } from "@/components/BackGroundImg";

function ResetPassPage() {
  return (
    <div className="flex h-full w-full bg-[#232323]  flex-col">
      <NavigationLogin />
      <BackGroundImg />

      <div className="flex flex-col py-6 px-[88px]">
        <FoodsWithCategories />
      </div>
      <Footer />
    </div>
  );
}
export default ResetPassPage;
