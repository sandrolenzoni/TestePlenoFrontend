import * as React from "react"
import { Label } from "./label";

import './style.css';

type InputParams = Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> & {
  label?: string;
  helptText?: string;
}

type ErrorTextParams = Omit<React.InputHTMLAttributes<HTMLSpanElement>, "className"> & {}



const ErrorText = React.forwardRef<HTMLSpanElement, ErrorTextParams>(
  ({ children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className="input-error-text"
        {...props}
      >
        {children}
      </span>
    )
  }
)

const Input = React.forwardRef<HTMLInputElement, InputParams>(
  ({ label, helptText, ...props }, ref) => {
    return (
      <div className="input-root">
        {label && <Label>
          {label}
        </Label>}
        <div className="input-container">
          <input
            ref={ref}
            data-slot="input"
            className="input-content"
            {...props}
          />
        </div>
        {helptText && <Label>
          {helptText}
        </Label>}
      </div>
    )
  }
)

export { Input, ErrorText }