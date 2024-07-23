import React from "react";
import ReactDOM from "react-dom/client";
import "./Assets/css/General.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home.tsx";
import CulturePage from "./Routes/Culture.tsx";
import Background from "./Routes/Background.tsx";
import Name from "./Routes/Name.tsx";
import Statistics from "./Routes/Statistics.tsx";
import Calling from "./Routes/Calling.tsx";
import Finish from "./Routes/Finish.tsx";
import { ConfigProvider, theme } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/calling" element={<Calling />} />
          <Route path="/background" element={<Background />} />
          <Route path="/name" element={<Name />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/finish" element={<Finish />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
