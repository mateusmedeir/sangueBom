'use client';

import Input from "@/components/Input";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const checkInput = {
	"text": () => "",

	"required": (value: string) => {
		if (!/^.{1,}$/.test(value))
			return "Campo obrigatorio.";
		return "";
	},

	"email": (value: string) => {
		if (!value)
			return "Campo obrigatorio."; 
		else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
			return "Email inválido."; 
		return "";
	},

}

interface AdvancedInputProps {
	label: string;
	placeholder?: string;
	inputType?: string;
	color?: "light" | "dark" | "orange";
	disabled?: boolean;
	required?: boolean;
	value: string;
	confirmValue?: string;
	setValue: Dispatch<SetStateAction<string>>;
	validateInput?: any;
}

const AdvancedInput: React.FC<AdvancedInputProps> = ({
	label,
	placeholder = "",
	inputType = "text",
	color = "orange",
	disabled = false,
	required = false,
	value,
	confirmValue,
	validateInput,
	setValue,

}) => {

	const [error, setError] = useState('');
	

	useEffect(() => {
		const changeError = () => {
			const inputValidationFunction = checkInput[inputType as keyof typeof checkInput];
			const validationResult = typeof inputValidationFunction === 'function' ? 
			inputValidationFunction(value) : required ? checkInput["required"](value) : '';
			setError(validateInput ? validateInput() : validationResult);
		};
		changeError();
	}, [value, confirmValue]);

	return (
		<div className='flex flex-col gap-1.5'>
			<p className={`
				text-base ${color === 'light'?'text-gray-400':'text-white'
			}`}>
				{label}
				{required?<span className="pl-1.5 text-primary">*</span>:''}
			</p>
            <Input {...{
                placeholder,
                inputType,
                color,
                disabled,
                required,
                value,
                setValue,
                error,
            }}>
            </Input>
		</div>
	);
};

export default AdvancedInput;