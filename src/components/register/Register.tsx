import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { color } from "../../helper/colors";
import useFormValidation from "../../hooks/useFormValidation";
import {
  registerFormInitialState,
  validationRules,
} from "../../helper/registrationForm.helper";
import FormControl from "../shared/FormControl";
import RegBgImg from "../../assets/images/registration-bg.jpeg";

const Register = () => {
  const { formData, formErrors, handleChange, handleSubmit } =
    useFormValidation(registerFormInitialState, validationRules);

  return (
    <Box
      h={"35rem"}
      overflow={"hidden"}
      position={"relative"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image
        w={"full"}
        h={"full"}
        src={RegBgImg}
        objectFit={"cover"}
        position={"absolute"}
      />

      <Box width={"50%"} h={"70%"} zIndex={1} pos={"relative"}>
        <Box
          h="full"
          w="full"
          position={"absolute"}
          borderRadius={"lg"}
          backdropFilter={"blur(7px)"}
          borderColor={"gray.100"}
          boxShadow={`0px 0px 17px 5px gray`}
        />

        <Box
          w={"full"}
          h="full"
          pos={"absolute"}
          zIndex={1}
          color={"white"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          p={3}
        >
          <Text
            fontSize={"4xl"}
            fontWeight={"bold"}
            id="properties"
            mt={"1rem"}
          >
            Register your interest
          </Text>
          <Text fontSize={"md"} textAlign={"center"} opacity={0.7}>
            Let us know your requirements so we can get back to you
          </Text>
          <Box
            mt={"3rem"}
            display={"flex"}
            flexDirection={"column"}
            gap={8}
            w="70%"
            color={"white"}
            alignItems={"center"}
          >
            <Box display={"flex"} gap={6} w={"full"}>
              <FormControl
                gap={1}
                flex={1}
                display="flex"
                flexDirection="column"
                isInvalid={!!formErrors.name}
                errorMsg={formErrors.name}
                inputPlaceHolder="Your name"
                handleChange={(event) =>
                  handleChange("name", event.target.value)
                }
                inputValue={formData.name}
              />

              <FormControl
                gap={1}
                flex={1}
                display="flex"
                flexDirection="column"
                isInvalid={!!formErrors.phoneNumber}
                errorMsg={formErrors.phoneNumber}
                inputPlaceHolder="Phone number"
                handleChange={(event) => {
                  handleChange("phoneNumber", event.target.value);
                }}
                inputValue={formData.phoneNumber}
              />
            </Box>
            <FormControl
              gap={1}
              flex={1}
              display="flex"
              flexDirection="column"
              isInvalid={!!formErrors.email}
              errorMsg={formErrors.email}
              inputPlaceHolder="Email address"
              handleChange={(event) => {
                handleChange("email", event.target.value);
              }}
              inputValue={formData.email}
            />

            <Button
              w={"40%"}
              onClick={() => handleSubmit()}
              bg={color.primaryYellow}
              mt={3}
            >
              Submit your request
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(Register);
