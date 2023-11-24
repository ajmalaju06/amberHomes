import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { color } from "../../helper/colors";
import AwardImg from "../../assets/svg/award.svg";
import FeaturedImg from "../../assets/svg/featured.svg";

const AwardWinning = () => {
  return (
    <Box
      mt={"12rem"}
      bg={color.secondaryBlack}
      borderTop={"1px solid gray.100"}
      px={"5rem"}
      display={"flex"}
      py={6}
      boxShadow={`0px 7px 15px 2px ${color.primaryYellow}`}
      justifyContent={"center"}
      gap={10}
    >
      <Box display={"flex"} alignItems={"center"} flex={1} gap={3}>
        <Image src={AwardImg} />
        <Text fontSize={"sm"} color={color.primaryYellow}>
          Awarded Top Sales Agency for 3 consecutive years by Meraas, Dubai
          Properties & Dubai Holding
        </Text>
      </Box>
      <Box display={"flex"} alignItems={"center"} flex={1} gap={3}>
        <Image src={FeaturedImg} />
        <Text fontSize={"sm"} color={color.primaryYellow}>
          Awarded Top Sales Agency for 3 consecutive years by Meraas, Dubai
          Properties & Dubai Holding
        </Text>
      </Box>
    </Box>
  );
};

export default React.memo(AwardWinning);
