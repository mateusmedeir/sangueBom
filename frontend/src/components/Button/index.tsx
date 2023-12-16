'use client';

interface ButtonProps {
	text?: string;
	disabled?: boolean;
	color?: "white" | "red";
	onClick?: any;
}

const Button: React.FC<ButtonProps> = ({
	text,
	disabled = false,
	color = "red",
	onClick = undefined
}) => {
	return (
	<button
	disabled={disabled}
	className={`
		${disabled === true?'bg-opacity-30 text-opacity-30':''}
		text-base
		${color === 'white'?'text-black':'text-white'}
		font-bold
		${color === 'white'?'bg-white':'bg-primary'}
		hover:bg-primary/90
		py-2.5
		w-full
		rounded-md
	`}
	onClick={onClick}
	>
		{text}
	</button>
	);
};

export default Button;