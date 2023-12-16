"use client"

import Button from  "@/components/Button"
import { useEffect, useState } from "react";
import AdvancedInput from "@/components/AdvancedInput";
import { checkInput } from "@/components/AdvancedInput";
import TopBar from "@/components/TopBar";
import SelectBox from "@/components/SelectBox";

export default function RegistrarBolsa() {
	const [email, setEmail] = useState('');
	const [bloodType, setBloodType] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
    console.log(bloodType);
		setIsFormValid(!checkInput["email"](email) && !!bloodType);
	}, [email, bloodType]);

  function registerBag() {
    if (isFormValid) {
      
    }
  }

	return (
		<div className="bg-background min-h-screen h-min max-h-screen">
      <TopBar/>
			<div className="container h-screen md:max-w-[500px] flex flex-col items-center justify-between gap-3">
        <div className="w-full flex flex-col gap-3.5 pt-[52px]">
              <AdvancedInput {...{
                label:"Email",
                placeholder:"Digite o email aqui",
                inputType:"email",
                color:"light",
                required:true,
                value:email,
                setValue:setEmail
              }}/>
              <SelectBox {...{
                label: "Tipo sanguineo",
                placeholder: "Selecione o seu tipo sanguinio",
                setValue: setBloodType,
                options: [
                  "A",
                  "B",
                  "AB",
                  "A+",
                  "B+",
                  "AB+",
                  "O+",
                  "O-"
                ]

              }}/>
            </div>
        <div className=" w-full flex flex-col gap-2">
					<div className=" w-full flex flex-col items-center gap-3.5">
						<Button {...{
							text:"Continuar",
							color:"red",
              onClick:registerBag,
							disabled:!isFormValid
						}} />
					</div>
				</div>
			</div>
		</div>
	) 
}