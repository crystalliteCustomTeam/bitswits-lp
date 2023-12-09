import HomeBannerSlider from "@/components/HomeBannerSliderlp";
import Justbuildit from "@/components/Justbuildit";
import NewHomeHear from "@/components/NewHomeHear";
import NewHomeWhat from "@/components/NewHomeWhat";
import NewHomeWho from "@/components/NewHomeWho";
import Nothing from "@/components/Nothing";
import ServiceBanner from "@/components/ServicesBanner";
import React from "react";


const BannerImage = await import("@/public/andriodapplication/andriod.png");


const headerNew = () => {
  return (
    <div>
      <ServiceBanner
        subtitle="Top Mobile App Development Company"
        title={
          <>
            {" "}
            Empowering Brands with Big <br /> Dreams and Innovative Visions{" "}
          </>
        }
        BannerImage={BannerImage}
        assignClass="homePage"
      />
      <HomeBannerSlider assignClass="homePage" />
      <Nothing Nothing="nothingLp6" />
      <NewHomeWho />
      <NewHomeWhat />
      <Justbuildit />
      <NewHomeHear />
    </div>
  );
};

export default headerNew;
