import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("need-help");

  return (
    <Layout>
      <div>user verified</div>
    </Layout>
  );
};

export default Dashboard;
