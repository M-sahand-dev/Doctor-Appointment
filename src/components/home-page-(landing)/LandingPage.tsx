import type { JSX } from "react";
import { Header, HeroSection, PopulerDoctors, SkilsList } from "../index";

export const LandingPage = (): JSX.Element => {
  return (
    // landing page component
    <div className="">
      <Header />
      <div className="mx-auto px-28 py-3 max-sm:px-4">
        <HeroSection />
        <main className="my-10">
          <SkilsList />
          <PopulerDoctors />
        </main>
      </div>
    </div>
  );
};
