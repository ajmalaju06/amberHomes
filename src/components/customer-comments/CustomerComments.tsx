import { Avatar, Box, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import SlideArrows from "../shared/SlideArrows";
import { color } from "../../helper/colors";
import { FaQuoteLeft } from "react-icons/fa";
import { commentsList } from "../../data/Common";

const CustomerComments = () => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    afterChange: (index: number) => setSliderIndex(index),
    nextArrow: (
      <SlideArrows
        position="right"
        slideIndex={sliderIndex}
        totalItems={6}
        sliderType="infinity"
      />
    ),
    prevArrow: (
      <SlideArrows
        position="left"
        slideIndex={sliderIndex}
        totalItems={6}
        sliderType="infinity"
      />
    ),
  };

  return (
    <Box py={10} px={10} mt={"2rem"}>
      <Box top={0} w="full" zIndex={0}>
        <Text fontSize={"3xl"} fontWeight={"900"} textAlign={"center"} w="full">
          What Our Customer Say About Us
        </Text>
        <Text fontSize={"md"} textAlign={"center"} opacity={0.7}>
          We offer perfect real estate services
        </Text>
      </Box>
      <Box mt={"1rem"}>
        <Slider {...settings}>
          {commentsList.map((item, index) => {
            return (
              <Box
                h="full"
                my={5}
                display={"flex"}
                flexDirection={"column"}
                position={"relative"}
                minH={"19rem"}
                key={item.id}
              >
                <Box
                  w="full"
                  display={"flex"}
                  flexDirection={"column"}
                  position={"absolute"}
                  h={sliderIndex === index ? "16rem" : "12rem"}
                  bg={color.white}
                  border={"1px"}
                  borderColor={"gray.100"}
                  transition={"0.4s ease-in-out"}
                  boxShadow={"md"}
                  borderRadius={"lg"}
                  p={4}
                  top={sliderIndex === index ? "2rem" : "4rem"}
                  justifyContent={"flex-start"}
                >
                  <Icon
                    as={FaQuoteLeft}
                    color={color.primaryYellow}
                    fontSize={"xx-large"}
                    position={"absolute"}
                    right={10}
                    top={"-15px"}
                  />
                  <Box
                    display={"flex"}
                    gap={3}
                    alignItems={"flex-start"}
                    overflow={"hidden"}
                  >
                    <Avatar
                      size={"md"}
                      bgColor={color.secondaryBlack}
                      src={item.image}
                    />
                    <Box display={"flex"} flexDirection={"column"} gap={2}>
                      <Text
                        fontSize={"md"}
                        fontWeight={"semibold"}
                        opacity={0.7}
                      >
                        {item.name}
                      </Text>
                      <Text fontSize={"sm"} overflowY={"scroll"} opacity={0.7}>
                        {item.comment + item.comment}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

export default React.memo(CustomerComments);
