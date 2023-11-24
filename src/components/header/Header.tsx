import { Box, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { headerMenuList } from "../../data/Common";
import { color } from "../../helper/colors";

interface HeaderProps {
  scrollPositions: number;
}

const Header: React.FC<HeaderProps> = ({ scrollPositions }) => {
  return (
    <Box
      w={"full"}
      py={5}
      px={"3rem"}
      display={"flex"}
      alignItems={"center"}
      zIndex={10}
      bg={scrollPositions >= 40 ? "white" : "none"}
      position={scrollPositions >= 40 ? "fixed" : "absolute"}
      transition={"0.4s ease-in-out"}
      boxShadow={scrollPositions >= 40 ? "lg" : "none"}
      //   background={"rgba(255, 255, 255, 0.2)"}
      //   backdropFilter={"blur(8px)"}
    >
      <Box flex={1}>
        <Image
          src="https://emaar.amberhomes.ae/assets/logo-300fab82.png"
          alt="logo"
          filter={scrollPositions >= 40 ? "brightness(1) invert(1)" : "none"}
          w={"10rem"}
          transition={"0.4s ease-in-out"}
        />
      </Box>

      <Box>
        <UnorderedList
          display={"flex"}
          listStyleType={"none"}
          gap={10}
          color={scrollPositions >= 40 ? "black" : "white"}
          userSelect={"none"}
        >
          {headerMenuList.map((item) => {
            return (
              <ListItem
                key={item.id}
                cursor={"pointer"}
                fontSize={"sm"}
                fontWeight={"semibold"}
                _hover={{ color: color.primaryYellow }}
                transition={"0.5s ease-in-out"}
              >
                {item.name}
              </ListItem>
            );
          })}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Header;
