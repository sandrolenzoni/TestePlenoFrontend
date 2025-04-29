import * as React from "react"
import './style.css';

function Label({ children, ...props }: Omit<React.ComponentProps<"label">, "className">) {
  return (
    <label
      className="input-label"
      {...props}
    >
      {children}
    </label>
  )
}

export { Label }