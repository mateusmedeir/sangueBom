'use client';
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

/**
 * @property {string} value - Value of string
 * @property {string?} description - [optional]: Description of value 
 */

interface SelectboxInput {
	setValue: Dispatch<SetStateAction<string>>;
	label: string,
	placeholder: string,
	options: string[],
	required?: boolean,
	color?:	"light" | "dark" | "red";
	focusStyle?: boolean,
	className?: string
};

/**
 * Cria uma caixa de seleção com label e descrição da opção acoplado
 * @param setValue {}: Função que irá atribuir o valor selecionado
 * @param label {string}: Texto que será aplicado como identificador do input de seleção
 * @param placeholder {string}: Texto inicial da pré-seleção do input (quando nada foi selecionado ainda)
 * @param options {OptionTemplate[]?}: [optional]: Opções possíveis a selecionar
 * @param description {string?}: [opcional]: Descrição das opções (caso seja nulo, as descrições serão omitidas)
 * @param required {boolean?}: [opcional]: Habilitar input obrigatório
 * @param color {string}: [opcional]: Configurar paleta de cor aplicada na caixa de seleção
 * @param focusStyle {boolean?}: [optional]: Habilitar efeito de alteração de ocapacidade quando focado/desfocado
 * @param className {string?}: [opcional]: Interação com o container do input
 * @returns 
 */
export default function Selectbox({ setValue, label, placeholder, options = [], required = false, color = "light", focusStyle = true, className = ''}: SelectboxInput) {
	const [defSelection, setDefSelection] = useState<string>("");

	let pallet: {
		[key: string]: string
	} = {
		text : "text-",
		requiredSimbol : "text-",
		borderBox: "border-",
		backgroundBoxColor: "bg-",
		backgroundBoxOpacity: "bg-opacity-",
	};

	switch (color) {
		case ("dark"):
			pallet.text += "white";
			pallet.requiredSimbol += "orange-100";
			pallet.borderBox += "white";
			pallet.backgroundBoxColor += "white";
			pallet.backgroundBoxOpacity += "20";
			break ;
		case ("light"):
			pallet.text += "gray-400";
			pallet.requiredSimbol += "orange-100";
			pallet.borderBox += "gray-400";
			pallet.backgroundBoxColor += "white";
			pallet.backgroundBoxOpacity += "40";
			break ;
		case ("red"):
			pallet.text += "white";
			pallet.requiredSimbol += "white";
			pallet.borderBox += "white";
			pallet.backgroundBoxColor += "white";
			pallet.backgroundBoxOpacity += "20";
			break ;
	};
	
	function handleChangeSelectBox(event: ChangeEvent<HTMLSelectElement>): void {
		const { value } = event.target;
		setValue(value);
	}

	return (
		<div className={className}>
			<p className="mb-1.5 text-base font-normal">
				<span className={pallet.text}>{label}</span>
				<span className={pallet.requiredSimbol}>{required ? " *" : ""}</span>
			</p>
			<div className='flex flex-col gap-1.5'>
				<select
					className={`	
						min-w-full w-full
						px-3 py-2.5
						rounded-[5px]
						border-2 border-solid ${pallet.borderBox}
						${pallet.backgroundBoxColor} ${pallet.backgroundBoxOpacity} 
						${pallet.text} text-base font-normal ${defSelection ? '' : 'text-opacity-30'}
					`}
					required={required}
					onChange={handleChangeSelectBox} 
				>
					<option key={0} disabled selected hidden value={placeholder}>{placeholder}</option>
					{
						options.map(
							(opt, idx) => {
                                console.log();
								return (
									<option 
										className={
											`${color === 'dark' ? 'bg-black/80':''}
										`}
										key={idx}
										value={opt}>{opt}
									</option>
								);
							}
						)
					}
				</select>
			</div>
		</div>
	);	
}