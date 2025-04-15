import { AuthBigImage } from "@/components/auth/AuthBigImage";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="w-[40%] h-full flex justify-center items-center">
        {children}
      </div>
      <AuthBigImage />
    </div>
  );
}
