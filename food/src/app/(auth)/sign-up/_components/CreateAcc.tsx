import React from "react";
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

export const CreateAcc = () => {
  return (
    <div className="relative w-[40%] ">
      <Tabs defaultValue="account" className="w-[416px] ">
        <TabsContent value="account">
          <div className=" flex flex-col gap-[24px]">
            <CardHeader>
              <CardTitle className="text-[24px] font-[600]">
                Create your account
              </CardTitle>
              <CardDescription>
                Sign up to explore your favourite dishes.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-[16px]">
              <div className="space-y-1">
                <Input id="name" placeholder="Enter your email address" />
              </div>
            </CardContent>

            <CardFooter className="flex flex-col">
              <Button className="flex w-full">Let's Go</Button>
            </CardFooter>
            <div className="flex gap-2 justify-center">
              <p className="text-[#71717A] text-[16px] font-[400]">
                Already have an account?
              </p>{" "}
              <a className="text-[#2563EB] text-[16px] font-[400]">Log in</a>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
