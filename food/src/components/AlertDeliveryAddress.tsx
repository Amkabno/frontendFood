import React from "react";

export const AlertDeliveryAddress = () => {
  return (
    <div className="bg-white h-[320px] w-[664px] flex flex-col rounded-[20px] p-[24px] justify-between items-center ">
      <p className="text-[24px] font-[600]">
        Please select your delivery address
      </p>{" "}
      <img src="res.svg" />{" "}
      <button className="bg-[#F4F4F5] w-[134px] h-[44px] text-[14px] font-[500] rounded-full px-[48px] py-[8px]">
        Close
      </button>
    </div>
  );
};
