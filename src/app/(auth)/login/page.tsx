"use client";

import Form from "@/components/form/Form";
import FormButton from "@/components/form/FormButton";
import FormInput from "@/components/form/FormInput";
import Heading2 from "@/components/ui/Heading2";
import { validateEmail, validatePassword } from "@/utils/form";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [passwordError, setPasswordError] = useState<string | undefined>(
    undefined
  );

  const submitForm = () => {
    alert("login successful");
  };
  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const emailValidated = validateEmail(email);
    const passwordValidated = validatePassword(password);
    emailValidated !== ""
      ? setEmailError(emailValidated)
      : setEmailError(undefined);
    passwordValidated !== ""
      ? setPasswordError(passwordValidated)
      : setPasswordError(undefined);
    emailValidated === "" && passwordValidated === "" && submitForm();
  };

  return (
    <main className="flex flex-1 justify-center items-center">
      <div className="w-1/2 m-auto">
        <Form>
          <Heading2>Login</Heading2>
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
          <FormButton onClick={onSubmit}>Submit</FormButton>
        </Form>
      </div>
    </main>
  );
}
