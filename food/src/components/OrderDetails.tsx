import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ShoppingCart } from "lucide-react";

type OrderDetailsProps = {
  open: boolean;
  onClose: () => void;
};

export function OrderDetails({ open, onClose }: OrderDetailsProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent>
        <SheetTitle>
          <div className="flex items-center gap-[12px] p-8">
            {" "}
            <ShoppingCart className="text-white size-[22px] stroke-[2px] " />{" "}
            <p className="text-white text-[20px] font-[600]">Order detail</p>{" "}
          </div>
          <div className="flex flex-col px-[32px]">
            <Tabs defaultValue="account" className="w-[400px] ">
              <TabsList className="w-[471px]">
                <TabsTrigger value="account">Cart</TabsTrigger>
                <TabsTrigger value="password">Order</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>
          </div>
        </SheetTitle>
      </SheetContent>
    </Sheet>
  );
}
