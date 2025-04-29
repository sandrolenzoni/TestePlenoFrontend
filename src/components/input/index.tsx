import * as React from "react"
import { Label } from "./label";

import './style.css';

type InputParams = Omit<React.ComponentProps<"input">, "className"> & {
  label?: string;
  helptText?: string;
}

function Input({
  type,
  label,
  helptText,
  ...props
}: InputParams) {
  return (
    <div className="input-root">
      {label && <Label>
        {label}
      </Label>}
      <div className="input-container">
        <input
          type={type}
          data-slot="input"
          className="input-content"
          {...props}
        />
      </div>
    </div>
  )
};

export { Input }