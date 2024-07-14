import React, { forwardRef } from "react";

type InputProps = {
  id: string;
  type: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, type, className = "w-full p-2", ...props }, ref) => {
    return (
      <input
        id={id}
        type={type}
        className={"w-full p-2 border border-gray-500 rounded" + className}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
