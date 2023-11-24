import {
  FormControl as ChakraFormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { color } from "../../helper/colors";

interface FormPropsInterface extends FormControlProps {
  label?: string;
  children?: JSX.Element;
  isInvalid?: boolean;
  errorMsg?: string;
  handleChange?: (event: any) => void;
  inputValue?: string;
  inputPlaceHolder?: string;
}
const FormControl: React.FC<FormPropsInterface> = ({
  label,
  children,
  isInvalid,
  errorMsg,
  handleChange,
  inputValue,
  inputPlaceHolder,
}) => {
  return (
    <ChakraFormControl isInvalid={isInvalid} position={"relative"}>
      {label && (
        <FormLabel fontSize={14} m={1} fontWeight="normal" color="dimGray">
          {label}
        </FormLabel>
      )}
      <Input
        placeholder={inputPlaceHolder}
        onChange={(event) => {
          if (handleChange) handleChange(event);
        }}
        value={inputValue}
        transition={"0.4s ease-in-out"}
        _focusVisible={{
          boxShadow: !isInvalid && `0 0 0 1px  ${color.primaryYellow}`,
          border: !isInvalid && `1px`,
          borderColor: !isInvalid && `${color.primaryYellow}`,
        }}
      />
      {errorMsg && (
        <FormErrorMessage
          fontSize={"xs"}
          position={"absolute"}
          bottom={"-20px"}
        >
          {errorMsg}
        </FormErrorMessage>
      )}
    </ChakraFormControl>
  );
};
export default React.memo(FormControl);
