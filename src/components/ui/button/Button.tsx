import { ReactNode, MouseEvent } from "react";
import Spinner from "@/components/ui/spinner/Spinner";
interface ButtonProps {
  children: ReactNode; // Button text or content
  size?: "sm" | "md"; // Button size
  variant?: "primary" | "outline"; // Button variant
  startIcon?: ReactNode; // Icon before the text
  endIcon?: ReactNode; // Icon after the text
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // Click handler
  disabled?: boolean; // Disabled state
  className?: string; // Disabled state
  color?: "primary" | "secondary" | "error" | "warning" | "success"; // Disabled state
  type?: "button" | "submit" | "reset";
  isLoading?: boolean; // Loading state
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "primary",
  color = "primary",
  startIcon,
  endIcon,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  isLoading = false,
}) => {
  // Size Classes
  const sizeClasses = {
    sm: "px-4 py-3 text-sm",
    md: "px-5 py-3.5 text-sm",
  };

  // Variant Classes
  const variantClasses = {
    primary:
      `bg-${color === "primary" ? "brand" : color}-500 text-white shadow-theme-xs hover:bg-${color === "primary" ? "brand" : color}-600 disabled:bg-${color === "primary" ? "brand" : color}-300`,
    outline:
      `bg-white text-${color === "primary" ? "gray" : color}-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300`,
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center active:scale-95 justify-center gap-2 rounded-lg transition ${className} ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {isLoading && <Spinner className="w-4 h-4" />}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};

export default Button;
