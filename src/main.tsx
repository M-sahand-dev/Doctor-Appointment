import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AboutUs,
  AppointmentInfo,
  DetailPage,
  DoctorList,
  FAQ,
  LandingPage,
  PaymentInfo,
} from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/doctorList" element={<DoctorList />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route
            path="/detail/:id/appointmentInfo"
            element={<AppointmentInfo />}
          />
          <Route path="/detail/:id/paymentInfo" element={<PaymentInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
