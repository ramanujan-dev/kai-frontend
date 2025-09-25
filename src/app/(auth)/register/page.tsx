"use client";

import Form from "@/components/form/Form";
import FormButton from "@/components/form/FormButton";
import FormInput from "@/components/form/FormInput";
import Heading2 from "@/components/ui/Heading2";
import { validateEmail, validatePassword } from "@/utils/form";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfrimPassword] = useState("");

  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [passwordError, setPasswordError] = useState<string | undefined>(
    undefined
  );
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | undefined
  >(undefined);

  const submitForm = () => {
    alert("Registration successful");
  };
  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const emailValidated = validateEmail(email);
    const passwordValidated = validatePassword(password);
    const confirmPasswordValidated =
      password !== confirmPassword ? "Passwords didn't match" : "";
    emailValidated !== ""
      ? setEmailError(emailValidated)
      : setEmailError(undefined);
    passwordValidated !== ""
      ? setPasswordError(passwordValidated)
      : setPasswordError(undefined);
    confirmPasswordValidated !== ""
      ? setConfirmPasswordError(confirmPasswordValidated)
      : setConfirmPasswordError(undefined);
    emailValidated === "" &&
      passwordValidated === "" &&
      confirmPasswordValidated === "" &&
      submitForm();
  };

  return (
    <main className="flex flex-1 justify-center items-center">
      <div className="w-1/2 m-auto">
        <Form>
          <Heading2>Register</Heading2>
          <FormInput
            id="email"
            label="Email"
            type="text"
            value={email}
            error={emailError}
            onChange={(e) => setEmail(e.target.value)}
          ></FormInput>
          <FormInput
            id="password"
            label="Password"
            type="password"
            value={password}
            error={passwordError}
            onChange={(e) => setPassword(e.target.value)}
          ></FormInput>
          <FormInput
            id="confirm-password"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            error={confirmPasswordError}
            onChange={(e) => setConfrimPassword(e.target.value)}
          ></FormInput>
          <FormButton onClick={onSubmit}>Submit</FormButton>
        </Form>
      </div>
    </main>
  );
}
