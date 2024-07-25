import { useState, createContext, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./Assets/css/General.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home.tsx";
import CulturePage from "./Routes/Culture.tsx";
import Background from "./Routes/Background.tsx";
import Name from "./Routes/Name.tsx";
import Statistics from "./Routes/Statistics.tsx";
import CallingPage from "./Routes/Calling.tsx";
import Finish from "./Routes/Finish.tsx";
import { ConfigProvider, theme } from "antd";
import { Character } from "./Types/Character.ts";

// Global State
const defaultCharacter: Character = { name: `Medik-${Date.now().toString()}` };
export const CharacterContext = createContext<Character>(defaultCharacter);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <BrowserRouter>
        <CharacterContext.Provider value={defaultCharacter}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/culture" element={<CulturePage />} />
            <Route path="/calling" element={<CallingPage />} />
            <Route path="/background" element={<Background />} />
            <Route path="/name" element={<Name />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/finish" element={<Finish />} />
          </Routes>
        </CharacterContext.Provider>
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>
);
