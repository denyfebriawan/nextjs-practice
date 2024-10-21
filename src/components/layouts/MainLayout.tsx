import React from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const disableNavbar = ["/404"];
  const { pathname } = useRouter();
  return (
    <div>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </div>
  );
};

export default MainLayout;
