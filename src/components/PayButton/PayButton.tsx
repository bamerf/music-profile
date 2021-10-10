import * as React from "react";
import cn from "clsx";

// @ts-ignore
import styles from "./payButton.module.scss";

interface ComponentProps {
  trailingElement?: JSX.Element | string;
  focused?: boolean;
  capitalize?: boolean;
  color?: "primary" | "secondary" | "success" | "danger" | "grey" | "outline";
  variant?: "link" | "default";
  size?: "xs" | "sm" | "md" | "lg" | "full";
  fontSize?: "small" | "medium" | "large";
  wrapperClass?: string;
}

type ComponentTypes = ComponentProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function PayButton({
  children,
  trailingElement,
  focused,
  capitalize,
  color = "outline",
  variant = "default",
  size = "md",
  fontSize = "medium",
  wrapperClass = "",
  ...restProps
}: ComponentTypes) {
  const className = cn({
    [styles.default]: variant === "default",
    [styles.outline]: color === "outline", // Outline is default
    [styles.focused]: !!focused,
    [styles.capitalize]: !!capitalize,
    [styles.primary]: color === "primary",
    [styles.secondary]: color === "secondary",
    [styles.danger]: color === "danger",
    [styles.success]: color === "success",
    [styles.grey]: color === "grey",
    [styles.link]: variant === "link",
    [styles[size]]: true,
    [styles[fontSize]]: true,
  });

  return (
    <div className={`${className} ${wrapperClass}`}>
      <button type="button" {...restProps}>
        {children}
        {trailingElement}
      </button>
    </div>
  );
}
