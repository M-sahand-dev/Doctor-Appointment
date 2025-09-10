import type { JSX } from "react";
import {
  Blog,
  Comments,
  Footer,
  Header,
  HeroSection,
  NewDr,
  PopulerDoctors,
  Prescription,
  Questions,
  SkilsList,
} from "../index";

export const LandingPage = (): JSX.Element => {
  return (
    // landing page component
    <div className="">
      {/* header component */}
      <Header />
      <div className="mx-auto px-28 py-3 max-sm:px-4">
        {/* hero section component */}
        <HeroSection />
        <main className="my-10">
          {/* skils list component */}
          <SkilsList />
          {/* populer doctors component */}
          <PopulerDoctors />
          {/* prescription component */}
          <Prescription />
          {/* new doctors component */}
          <NewDr />
          {/* comments component */}
          <Comments />
          {/* questions component */}
          <Questions />
          {/* blog component */}
          <Blog />
        </main>
      </div>
      {/* <Footer /> */}
      <Footer />
    </div>
  );
};
