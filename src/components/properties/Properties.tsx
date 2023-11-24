import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import SlideArrows from "../shared/SlideArrows";
import { propertiesList } from "../../data/Common";
import "../../css/properties.css";

const Properties = () => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <SlideArrows
        position="right"
        slideIndex={sliderIndex}
        totalItems={propertiesList.length}
      />
    ),
    prevArrow: (
      <SlideArrows
        position="left"
        slideIndex={sliderIndex}
        totalItems={propertiesList.length}
      />
    ),
    afterChange: (index: number) => setSliderIndex(index),
  };

  return (
    <Box
      h={"20rem"}
      px={"4rem"}
      mt={"4rem"}
      position={"relative"}
      id="properties"
    >
      <Text fontSize={"3xl"} fontWeight={"900"} textAlign={"left"} w="full">
        Properties
      </Text>
      <Text fontSize={"lg"} color={"#00000080"}>
        Browse our properties
      </Text>
      <Box
        mt={"3rem"}
        pl={"4rem"}
        position={"absolute"}
        w="97%"
        display={"flex"}
        flexDirection={"column"}
        transition={"0.4s ease-in-out"}
      >
        <Slider {...settings}>
          {propertiesList.map((item, index) => {
            return (
              <Box
                key={item.id}
                boxShadow={"md"}
                display={"flex"}
                flexDirection={"column"}
                height={"400px"}
                w={"200px"}
                position={"relative"}
                borderRadius={"lg"}
                overflow={"hidden"}
                className="slide-item-container"
                cursor={"pointer"}
                visibility={
                  index + 1 === propertiesList.length ? "hidden" : "visible"
                }
              >
                <Box
                  position={"absolute"}
                  bottom={"20px"}
                  px={3}
                  py={2}
                  zIndex={2}
                  userSelect={"none"}
                  className="slide-details"
                  transition={"0.4s ease-in-out"}
                >
                  <Text color="white" fontSize={"md"} noOfLines={1}>
                    {item.name}
                  </Text>
                  <Text color="white" fontWeight={"extrabold"} fontSize={"lg"}>
                    {item.price}
                  </Text>
                  <Text color="whitesmoke" fontSize={"sm"}>
                    {item.specs}
                  </Text>
                </Box>
                <Box
                  position={"absolute"}
                  bottom={-5}
                  px={3}
                  zIndex={2}
                  className="view-details"
                  transition={"0.4s ease-in-out"}
                >
                  <Text fontSize={"xs"} color={"white"} fontWeight={"semibold"}>
                    VIEW DETAILS
                  </Text>
                </Box>
                <Box
                  h={"10rem"}
                  w={"full"}
                  bgGradient="linear(transparent 0%, transparent 0%, #000000CC 90%)"
                  position={"absolute"}
                  zIndex={1}
                  bottom={0}
                />
                <Image
                  src={item.image}
                  alt="property"
                  width={"full"}
                  h={"full"}
                  objectFit={"cover"}
                  transition={"0.8s ease-in-out"}
                  className="bg-image"
                />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

export default Properties;
