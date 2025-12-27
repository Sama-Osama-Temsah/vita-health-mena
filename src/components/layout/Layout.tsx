import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isRTL } = useLanguage();
  
  return (
    <div className={cn("min-h-screen flex flex-col", isRTL && "font-arabic")}>
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
};
