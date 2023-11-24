import { Box, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { color } from "../../helper/colors";
import { footerTopProjectList } from "../../data/Common";
import { GrMailOption } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      position={"relative"}
      bg={color.secondaryBlack}
      display={"flex"}
      py={"3rem"}
      className="wave"
    >
      <Box
        mt={"1rem"}
        px={"3rem"}
        w="full"
        display={"flex"}
        color={"white"}
        gap={"5rem"}
        zIndex={2}
      >
        <Box flex={2}>
          <Image
            src="https://emaar.amberhomes.ae/assets/logo-300fab82.png"
            alt="logo"
            filter={"brightness(10) invert(0)"}
            w={"10rem"}
            transition={"0.4s ease-in-out"}
          />
          <Text fontSize={"sm"} ml={3} mt={7}>
            Amber Homes Real Estate collaborates with the region's premier
            developers, offering you the latest and most promising properties,
            along with precise ROI insights for informed decisions.
          </Text>
        </Box>

        <Box flex={1}>
          <Text fontSize={"md"} id="properties">
            Top emaar projects
          </Text>
          <Box display={"flex"} flexDirection={"column"} gap={3} mt={"1rem"}>
            {footerTopProjectList.map((item) => {
              return (
                <Text
                  key={item.id}
                  cursor={"pointer"}
                  fontSize={"xs"}
                  transition={"0.5s ease-in-out"}
                  _hover={{ color: color.primaryYellow }}
                >
                  {item.name}
                </Text>
              );
            })}
          </Box>
        </Box>

        <Box flex={1}>
          <Text fontSize={"md"} id="properties">
            Get connected
          </Text>
          <Box
            display={"flex"}
            mt={"1rem"}
            alignItems={"center"}
            gap={3}
            transition={"0.5s ease-in-out"}
            _hover={{ color: color.primaryYellow }}
          >
            <Icon as={GrMailOption} />
            <Text cursor={"pointer"} fontSize={"xs"}>
              info@amberhomes.ae
            </Text>
          </Box>
          <Box
            display={"flex"}
            mt={"1rem"}
            alignItems={"center"}
            gap={3}
            transition={"0.5s ease-in-out"}
            _hover={{ color: color.primaryYellow }}
          >
            <Icon as={BsTelephone} />
            <Text cursor={"pointer"} fontSize={"xs"}>
              +971 4 368 4497
            </Text>
          </Box>
        </Box>

        <Box flex={1}>
          <Text fontSize={"md"} id="properties">
            Follow us
          </Text>
          <Box display={"flex"} gap={5} mt={"1rem"}>
            <Box
              w={"30px"}
              h={"30px"}
              bg={color.secondaryGray}
              borderRadius={"full"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{ bg: color.primaryYellow }}
              transition={"0.5s ease-in-out"}
            >
              <Icon
                as={FaFacebookF}
                color={color.secondaryBlack}
                fontSize={"md"}
              />
            </Box>
            <Box
              w={"30px"}
              h={"30px"}
              bg={color.secondaryGray}
              borderRadius={"full"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{ bg: color.primaryYellow }}
              transition={"0.5s ease-in-out"}
            >
              <Icon
                as={FaLinkedinIn}
                color={color.secondaryBlack}
                fontSize={"md"}
              />
            </Box>
            <Box
              w={"30px"}
              h={"30px"}
              bg={color.secondaryGray}
              borderRadius={"full"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              fontSize={"larger"}
              _hover={{ bg: color.primaryYellow }}
              transition={"0.5s ease-in-out"}
            >
              <Icon
                as={FaInstagram}
                color={color.secondaryBlack}
                fontSize={"md"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(Footer);
