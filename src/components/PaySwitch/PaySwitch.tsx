import * as React from "react";
import cn from "clsx";

// @ts-ignore
import styles from "./paySwitch.module.scss";

interface ComponentProps {
  label?: string;
  className?: string;
  ref?: React.RefObject<HTMLInputElement>;
}

type ComponentTypes = ComponentProps & React.InputHTMLAttributes<HTMLInputElement>;

export default function PaySwitch({ label, className, ref, ...restProps }: ComponentTypes) {
  return (
    <div className={cn({ [styles.root]: true, className: !!className })}>
      <label className={cn({ [styles.disabled]: restProps.disabled })}>
        <input type="checkbox" ref={ref} {...restProps} />
        {label}
      </label>
    </div>
  );
}
