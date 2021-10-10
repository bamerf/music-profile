import * as React from "react";
import cn from "clsx";

import styles from "./payTextArea.module.scss";

interface ComponentProps {
	label?: string;
	infoMessage?: string;
	errorMessage?: string;
	classNames?: {
		label?: string;
		textarea?: string;
	};
	rows?: number;
}

export const PayTextArea = React.forwardRef<
	HTMLTextAreaElement,
	ComponentProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(
	(
		{
			onChange,
			label,
			placeholder,
			classNames,
			className,
			infoMessage,
			required = true,
			errorMessage,
			rows = 1,
			...restProps
		},
		ref
	) => (
		<div className={styles.root}>
			<label className={classNames?.label}>
				{(label || !required) && (
					<div className={styles.label}>
						<div>
							{label}
							{!required && <span className={styles.optional}>optional</span>}
						</div>
					</div>
				)}

				<div
					className={cn({
						[styles.textareaContainer]: true,
						[styles.error]: errorMessage,
					})}
				>
					<textarea
						rows={rows}
						onChange={onChange}
						className={cn([styles.textarea, classNames?.textarea, className])}
						ref={ref}
						placeholder={placeholder}
						{...restProps}
					/>
					<div className={styles.border} />
				</div>
				{errorMessage && <div className={styles.error}>{errorMessage}</div>}
				{infoMessage && <div className={styles.info}>{infoMessage}</div>}
			</label>
		</div>
	)
);

export default PayTextArea;
