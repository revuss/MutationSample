import ThemeButton from "@/Components/ThemeButton";
import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout: React.FC = () => {
  return (
    <>
      <nav className="h-auto py-4 flex justify-between px-10">
        {" "}
        <span>Navbar</span> <ThemeButton />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;
