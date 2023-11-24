import React from "react";
import { Box, Button, Icon, Text } from "@chakra-ui/react";
import { color } from "../../helper/colors";
import "../../css/mainBanner.css";
import { GoArrowDown } from "react-icons/go";

interface MainBanner {
  handleArrowScroll: () => void;
}

const MainBanner: React.FC<MainBanner> = ({ handleArrowScroll }) => {
  return (
    <Box
      px={"3rem"}
      position={"absolute"}
      w="full"
      top={"16rem"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        gap={3}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Text
          className="heading-text"
          as={"h1"}
          color={color.white}
          display={"flex"}
          gap={3}
          flexWrap={"wrap"}
          justifyContent={"center"}
          textShadow={`${color.black} 1px 0 10px`}
        >
          <Text as={"span"}>TOP</Text>
          <Text as={"span"}>EMAAR</Text>
          <Text as={"span"}>PROJECTS</Text>
          <Text as={"span"}>TO</Text>
          <Text as={"span"}>INVEST</Text>
          <Text as={"span"}>IN</Text>
          <Text as={"span"}>2023</Text>
        </Text>

        <Text
          w="full"
          className="heading-text"
          display={"flex"}
          gap={2}
          flexWrap={"wrap"}
          justifyContent={"center"}
          color={color.primaryYellow}
          fontSize={"3xl"}
          fontWeight={"bold"}
          textShadow={`${color.black} 1px 0 10px`}
        >
          <Text as={"span"}>Showcasing</Text>
          <Text as={"span"}>all</Text>
          <Text as={"span"}>the</Text>
          <Text as={"span"}>upcoming</Text>
          <Text as={"span"}>projects,</Text>
          <Text as={"span"}>recently</Text>
          <Text as={"span"}>launched</Text>
          <Text as={"span"}>or</Text>
          <Text as={"span"}>soon</Text>
          <Text as={"span"}>to</Text>
          <Text as={"span"}>be</Text>
          <Text as={"span"}>launched</Text>
        </Text>
        <Text></Text>
      </Box>
      <Box
        bg={color.primaryYellow}
        display={"flex"}
        borderRadius={"full"}
        w="40px"
        h="40px"
        justifyContent={"center"}
        alignItems={"center"}
        position={"absolute"}
        top={"20rem"}
        onClick={() => handleArrowScroll()}
        cursor={"pointer"}
        _hover={{ transform: "scale(1.1)" }}
        transition={"0.4s ease-in-out"}
        boxShadow={"lg"}
      >
        <Icon as={GoArrowDown} fontSize={"2xl"}></Icon>
      </Box>
    </Box>
  );
};

export default MainBanner;
