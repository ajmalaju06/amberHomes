import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { color } from "../../helper/colors";
import "../../css/whyInvest.css";
import { whyInterestList } from "../../data/Common";

const WhyInvest = () => {
  return (
    <Box display={"flex"} mt={"2rem"} overflow={"hidden"} boxShadow={"sm"}>
      <Box
        flex={1}
        bg={color.primaryYellow}
        px={"4rem"}
        py={"3rem"}
        display={"flex"}
        flexDirection={"column"}
        boxShadow={"md"}
      >
        <Text fontSize={"3xl"} fontWeight={"900"} textAlign={"left"} w="full">
          Why Invest In Dubai?
        </Text>
        <Text fontSize={"sm"} textAlign={"left"} mt={"4rem"}>
          Since 2020, Dubai has eclipsed renowned markets like New York and
          London, emerging as the global epicenter for luxury real estate.
          Thanks to visionary policies and innovation, it now stands as the
          premier destination for investors seeking high-value properties,
          blending modernity with unmatched luxury.
        </Text>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flex={2}
        bg={color.secondaryGray}
        px={"4rem"}
        py={"5rem"}
      >
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          gap={14}
          justifyContent={"center"}
        >
          {whyInterestList.map((item) => {
            return (
              <Box key={item.id}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  boxShadow={`0px 0px 17px 5px gray`}
                  background={color.secondaryBlack}
                  borderRadius={"full"}
                  width={"120px"}
                  h={"120px"}
                  px={2}
                  gap={2}
                  overflow={"hidden"}
                >
                  <Image src={item.icon} w={7} />

                  <Text
                    color={color.primaryYellow}
                    fontSize={"10px"}
                    wordBreak={"break-all"}
                    textAlign={"center"}
                    dangerouslySetInnerHTML={{ __html: item.name }}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(WhyInvest);
