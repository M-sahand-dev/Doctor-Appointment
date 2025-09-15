import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutUs, DoctorList, FAQ, LandingPage } from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/doctorList" element={<DoctorList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
