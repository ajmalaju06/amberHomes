import { Box, Icon, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import MainBanner from "../components/main-banner/MainBanner";
import Properties from "../components/properties/Properties";
import WhyChooseUs from "../components/why-choose-us/WhyChooseUs";
import { color } from "../helper/colors";
import AwardWinning from "../components/award-winning/AwardWinning";
import Slider from "react-slick";
import "../css/comment.css";
import CustomerComments from "../components/customer-comments/CustomerComments";
import WhyInvest from "../components/why-invest/WhyInvest";
import FooterBgImg from "../assets/images/footer-bg.jpeg";
import Footer from "../components/footer/Footer";
import Register from "../components/register/Register";

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
      <Image
        src="https://pixelprime.co/themes/resideo/light/images/hero-1.jpg"
        alt="dubai"
        w="full"
        h="43rem"
        objectFit={"cover"}
        zIndex={0}
      />
      <Box
        w={"full"}
        h="43rem"
        background={"black"}
        position={"absolute"}
        zIndex={0}
        opacity={0.4}
      />
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

export default HomePage;
