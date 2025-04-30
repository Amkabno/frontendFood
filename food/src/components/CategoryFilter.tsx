"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

type CategoryData = {
  name: string;
  categoryId: string;
};

export const CategoryFilter = () => {
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("categoryId");

  const fetchFoods = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}food/68009ef1b62026487333f1be`
    );
    setCategories(res.data.foods);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const handleOnClick = (categoryId: string) => {
    router.push(`?categoryId=${categoryId}`, { scroll: false });
  };

  return (
    <Pagination>
      <PaginationContent>
        <div className="flex flex-col pt-[32px] px-[48px]">
          <p className="text-[30px] text-white font-[600] pl-[40px] pb-[36px]">
            Categories
          </p>
          <div className="flex gap-[8px] flex-wrap">
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>

            {categories?.map((category, index) => (
              <button
                key={index}
                onClick={() => handleOnClick(category.categoryId)}
                className={`flex h-[34px] justify-center items-center bg-white rounded-full text-[15px] font-[400] px-[20px] hover:bg-[#EF4444] hover:text-white transition ${
                  selectedCategory === category.categoryId
                    ? "bg-[#EF4444] text-white"
                    : ""
                }`}
              >
                {category.name}
              </button>
            ))}

            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </div>
        </div>
      </PaginationContent>
    </Pagination>
  );
};
