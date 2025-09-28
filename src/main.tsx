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
  Otp,
  PaymentInfo,
  Signin,
  Signup,
  UserPanel,
} from "./components";
import { SuccessErrorPay } from "./components/detailPage/SuccessErrorPay.tsx";
import { ArticlesPage } from "./components/articlesPage/ArticlesPage.tsx";
// import { AuthContextProvider } from "./context/AuthContext.tsx";

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
          <Route path="/articlePage" element={<ArticlesPage />} />
          <Route
            path="/detail/:id/appointmentInfo"
            element={<AppointmentInfo />}
          />
          <Route path="/detail/:id/paymentInfo" element={<PaymentInfo />} />
          {/* for test success or error pay ❗❗*/}
          <Route
            path="/detail/:id/SuccessErrorPay"
            element={<SuccessErrorPay />}
          />
          {/* page signup and signin ruter */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/otp" element={<Otp />} />
          <Route path="/signin/otp" element={<Otp />} />
          {/* go to the user panel  */}
          <Route path="/userPanel" element={<UserPanel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
