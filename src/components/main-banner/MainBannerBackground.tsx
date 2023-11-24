import { Box, Image } from "@chakra-ui/react";
import React from "react";
import MainbannerImg from "../../assets/images/main-banner-bg.jpeg";

const MainBannerBackground = () => {
  return (
    <>
      <Image
        src={MainbannerImg}
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
    </>
  );
};

export default React.memo(MainBannerBackground);
