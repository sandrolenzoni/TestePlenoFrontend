import './style.css';
import { cn } from "../../lib/utils";

type ButtonCapysVariants = "primary" | "secondary" | "icon";
type ButtonCapysSizes = "small" | "medium";
type ButtonParams = Omit<React.ComponentProps<'button'>, "className"> & {
  variant?: ButtonCapysVariants;
  size?: ButtonCapysSizes;
  full?: boolean;
}


function Button({ variant = "primary", size = "medium", full, ...props }: ButtonParams) {
  return (
    <button
      className={cn("button",
        variant == 'primary' ? 'button-primary' : 'button-secondary',
        size === 'medium' ? 'button-medium' : 'button-small',
        full && 'button-w-full'
      )}
      {...props}
    />
  )
};

export { Button }