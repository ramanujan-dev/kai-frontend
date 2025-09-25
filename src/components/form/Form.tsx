import React, { FormHTMLAttributes } from "react";

// Define the props for our Form component
interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ children, ...props }) => {
  return (
    <form
      className="flex flex-col items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
