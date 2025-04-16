"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent } from "@/components/ui/tabs";

export const CreatePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-[40%] ">
      <Tabs defaultValue="account" className="w-[416px] ">
        <TabsContent value="account">
          <div className=" flex flex-col gap-[24px]">
            <CardHeader>
              <CardTitle className="text-[24px] font-[600]">
                Create a strong password
              </CardTitle>
              <CardDescription>
                Create a strong password with letters, numbers.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-[16px]">
              <div className="space-y-1">
                <Input id="name" placeholder="Password" />
              </div>
              <div className="space-y-1">
                <Input id="username" placeholder="Confirm" />
              </div>
              <div className="flex items-center gap-[8px]">
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={() => setShowPassword((prev) => !prev)}
                  className="w-[16px] h-[16px]"
                />
                <label htmlFor="showPassword">Show password</label>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col">
              <Button className="flex w-full">Let's Go</Button>
            </CardFooter>
            <div className="flex gap-2 justify-center">
              <p className="text-[#71717A] text-[16px] font-[400]">
                Don't have an account?
              </p>{" "}
              <a className="text-[#2563EB] text-[16px] font-[400]">Sign up</a>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
