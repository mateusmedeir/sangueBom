'use client';

import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

interface InputProps {
	placeholder: string;
	inputType: string;
	disabled: boolean;
	required: boolean;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	error: string;
}

const Input: React.FC<InputProps> = ({
	placeholder,
	inputType = "text",
	disabled = false,
	required = false,
	value,
	setValue,
	error,
  
}) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	function togglePasswordVisibility() {
		setIsPasswordVisible((prevState) => !prevState);
	}

	return (
			<div className="relative">
				<input 
					className={`
					text-base
					text-gray-400
					${(error && value)?'border-primary':'border-gray-400'}
					placeholder-black
					bg-white
					bg-opacity-40
					border-solid
					border-2
					rounded-md
					px-3
					py-2.5
					min-w-full
					w-full
					${disabled?'border-opacity-30':''}`}
					value={value}
					disabled={disabled}
					placeholder={placeholder}
					type={!inputType.includes("password") ? "text" : isPasswordVisible ? 'text' : 'password'}
					onChange={e => {setValue(e.target.value)}}
					required={required}
				/>
				{inputType.includes("password") && 
				<button 
				className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
				onClick={togglePasswordVisibility}
				type="button"
				>
					{ isPasswordVisible ? 
						<Image className="fill-white" src="/password-not-visible-icon.svg" width={21.92} height={20.19} alt="Senha visivel"/> :
						<Image className="fill-white" src="/password-visible-icon.svg" width={21.92} height={15} alt="Senha visivel"/>
					}
				</button>}
			</div>
	);
};

export default Input;