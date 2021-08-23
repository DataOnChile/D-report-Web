import React from "react";
import Dashboard from "../../components/home/dashboard";
import Menu from "../../components/home/menu";
import TopBar from "../../components/home/topBar";

const HomePage = () => {
  return (
    <div className="containerHomePage">
      <Menu />
      <div className='containerTopBarDashboard'>
        <TopBar />
        <Dashboard />
      </div>
    </div>
  );
};

export default HomePage;
