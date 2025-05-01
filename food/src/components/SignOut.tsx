import React from "react";
import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const SignOut = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[36px] h-[36px] bg-[#ef4444] flex justify-center items-center rounded-full">
        <User className="text-white size-[16px]" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="flex flex-col w-object-fit min-w-[188px] px-[16px] pt-[10px]">
        <DropdownMenuLabel className="text-[20px] font-[600] flex justify-center items-center  ">
          amkabno423@gmail.com
        </DropdownMenuLabel>

        <div className="flex justify-center items-center pb-[16px]">
          {" "}
          <button className="border-none bg-[#F4F4F5] rounded-full px-[12px] py-[8px] h-object-fit w-object-fit">
            Sign out
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
