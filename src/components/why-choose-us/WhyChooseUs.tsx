import React from "react";
import BuildingBg from "../../assets/svg/bulding.svg";
import { Box, Image, Text } from "@chakra-ui/react";
import { color } from "../../helper/colors";
import ChooseUs1Img from "../../assets/svg/choose-us-1.svg";
import { whyChooseUsDetails } from "../../data/Common";
import "../../css/whyChooseUs.css";

const WhyChooseUs: React.FC = () => {
  return (
    <Box
      mt={"18rem"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      position={"relative"}
      backgroundImage={`url(${BuildingBg})`}
      minH={"22rem"}
      backgroundPosition={"right"}
      // backgroundSize={"500px"}
    >
      <Box top={0} w="full" zIndex={0}>
        <Text
          fontSize={"3xl"}
          fontWeight={"900"}
          mt={"4rem"}
          textAlign={"center"}
          w="full"
        >
          Why Choose Us?
        </Text>
        <Text fontSize={"md"} textAlign={"center"} opacity={0.7}>
          We offer perfect real estate services
        </Text>
      </Box>

      <Box
        w="full"
        zIndex={3}
        display={"flex"}
        mt={"4rem"}
        bg={"color.white"}
        flexDirection={"column"}
        maxW={"80%"}
        gap={3}
        animation={"fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0)"}
        position={"absolute"}
        bottom={"-7.5rem"}
        cursor={"pointer"}
      >
        <Box
          display={"flex"}
          zIndex={1}
          boxShadow={"md"}
          borderRadius={"lg"}
          bg={color.white}
        >
          {whyChooseUsDetails.map((item, index) => {
            return (
              <Box
                py={7}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                flex={1}
                borderRight={
                  index + 1 >= whyChooseUsDetails.length ? "0px" : "1px"
                }
                borderColor={"gray.300"}
                position={"relative"}
                minH={"16rem"}
                zIndex={1}
                className="whychooseus_list_container"
                overflow={"hidden"}
              >
                <Image
                  src={ChooseUs1Img}
                  alt="sold"
                  w={20}
                  h="auto"
                  position={"absolute"}
                  bottom={"7rem"}
                  className="image_section"
                  transition={"0.4s ease-in-out"}
                />
                <Box
                  className="details_container"
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  position={"absolute"}
                  bottom={"2rem"}
                  transition={"0.4s ease-in-out"}
                  px={3}
                >
                  <Text fontSize={"xl"} fontWeight={"bold"} mt={"3rem"}>
                    {item.heading}
                  </Text>
                  <Text fontSize={"sm"} color={"gray.500"} textAlign={"center"}>
                    {item.subHeading}
                  </Text>
                </Box>
                <Text
                  position={"absolute"}
                  bottom={"-2rem"}
                  className="learn_more"
                  transition={"0.4s ease-in-out"}
                  cursor={"pointer"}
                  fontSize={"xs"}
                  fontWeight={"semibold"}
                  _hover={{ color: color.primaryYellow }}
                >
                  LEARN MORE
                </Text>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(WhyChooseUs);
