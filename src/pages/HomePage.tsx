import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import MainBanner from "../components/main-banner/MainBanner";
import Properties from "../components/properties/Properties";
import WhyChooseUs from "../components/why-choose-us/WhyChooseUs";
import AwardWinning from "../components/award-winning/AwardWinning";
import "../css/comment.css";
import CustomerComments from "../components/customer-comments/CustomerComments";
import WhyInvest from "../components/why-invest/WhyInvest";
import Footer from "../components/footer/Footer";
import Register from "../components/register/Register";
import MainBannerBackground from "../components/main-banner/MainBannerBackground";

const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleArrowScroll = () => {
    const propertyElement = document.getElementById("properties");
    if (propertyElement !== null)
      propertyElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      bg={"white"}
    >
      <MainBannerBackground />

      <Header scrollPositions={scrollPosition} />

      <MainBanner handleArrowScroll={handleArrowScroll} />

      <Properties />

      <WhyChooseUs />

      <AwardWinning />

      <CustomerComments />

      <WhyInvest />

      <Register />

      <Footer />
    </Box>
  );
};

export default React.memo(HomePage);
