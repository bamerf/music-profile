import React, { useState, cloneElement, isValidElement } from "react";
import cn from "clsx";

// @ts-ignore
import styles from "./payInput.module.scss";

interface ComponentProps {
	label?: string;
	leadingElement?: JSX.Element | string;
	trailingElement?: JSX.Element | string;
	actionElement?: JSX.Element | string;
	infoMessage?: string;
	errorMessage?: string;
	hintMessage?: string;
	classNames?: {
		label?: string;
		input?: string;
	};
	inputSize?: "sm" | "md" | "lg";
	hasDarkBackground?: boolean;
	hasTwoColumns?: boolean;
	type?: string;
	iconRender?: (passwordVisible: boolean) => JSX.Element | null;
	register?: (name: string | undefined, onChange: object) => void;
}

type ComponentTypes = ComponentProps &
	React.InputHTMLAttributes<HTMLInputElement>;

export default function PayInput({
	onChange,
	label,
	placeholder,
	classNames,
	className,
	leadingElement,
	trailingElement,
	actionElement,
	infoMessage,
	required = true,
	errorMessage,
	inputSize = "md",
	hintMessage,
	hasDarkBackground,
	hasTwoColumns,
	type = "text",
	iconRender,
	register,
	...restProps
}: ComponentTypes) {
	const [passwordVisible, setPasswordVisible] = useState(false);

	const onVisibleChange = () => {
		setPasswordVisible(!passwordVisible);
	};

	const getIcon = () => {
		const icon = iconRender && iconRender(passwordVisible);
		const iconProps = {
			onClick: onVisibleChange,
			key: "passwordIcon",
		};

		return cloneElement(
			isValidElement(icon) ? icon : <span>{icon}</span>,
			iconProps
		);
	};

	return (
		<div
			className={cn([
				styles.root,
				hasDarkBackground && styles.hasDarkBackground,
				hasTwoColumns && styles.hasTwoColumns,
			])}
		>
			<label className={classNames?.label}>
				{(label || !required || actionElement) && (
					<div className={styles.label}>
						<div>
							{label}
							{!required && <span className={styles.optional}>(optional)</span>}
							{hintMessage && (
								<span className={styles.optional}>{hintMessage}</span>
							)}
						</div>
						{actionElement && (
							<div className={styles.action}>{actionElement}</div>
						)}
					</div>
				)}

				<div
					className={cn({
						[styles.inputContainer]: true,
						[styles.error]: errorMessage,
					})}
				>
					{leadingElement && (
						<div className={cn(styles.leadingElement, styles[inputSize])}>
							{leadingElement}
						</div>
					)}
					<input
						className={cn([
							styles.input,
							classNames?.input,
							leadingElement ? styles.hasLeadingElement : "",
							trailingElement ? styles.hasTrailingElement : "",
							className,
							styles[inputSize],
						])}
						{...(iconRender
							? { type: passwordVisible ? "text" : "password" }
							: {})}
						placeholder={placeholder}
						onChange={onChange}
						{...restProps}
					/>
					{trailingElement && (
						<div className={cn(styles.trailingElement, styles[inputSize])}>
							{trailingElement}
						</div>
					)}
					{iconRender && (
						<div className={cn(styles.trailingElement, styles[inputSize])}>
							{getIcon()}
						</div>
					)}
					<div className={styles.border} />
				</div>
				{errorMessage && <div className={styles.error}>{errorMessage}</div>}
				{infoMessage && <div className={styles.info}>{infoMessage}</div>}
			</label>
		</div>
	);
}
