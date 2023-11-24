import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { ChangeEvent } from "react";

interface InputFormControlProps {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const InputFormControl: React.FC<InputFormControlProps> = ({
  label,
  placeholder,
  errorMessage,
  handleChange,
  value,
}) => {
  return (
    <FormControl isInvalid={!errorMessage} w="full%">
      <Input
        type="text"
        border="none"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {errorMessage ? (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      ) : (
        <></>
      )}
    </FormControl>
  );
};
export default InputFormControl;
