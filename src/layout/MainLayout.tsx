import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import ModalCard from "../components/ModalCard";
export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ModalCard />
    </div>
  );
};
