import { RegisterFormState } from "../modal/RegisterForm.type";

export const registerFormInitialState: RegisterFormState = {
  name: "",
  email: "",
  phoneNumber: "",
};

export const validationRules = {
  name: (value: string) => {
    if (!value) return "Your name is required.";
    return undefined;
  },
  email: (value: string) => {
    if (!value) return "email is required.";
    return undefined;
  },
  phoneNumber: (value: string) => {
    if (!value) return "Phone number is required.";
    return undefined;
  },
};
