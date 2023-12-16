"use client"

import BagItem from "@/components/BagItem";
import TopBar from "@/components/TopBar";

export default function ListaDeBolsas() {
	return (
		<div className="bg-background min-h-screen h-min max-h-screen">
      <TopBar/>
			<div className="container h-screen md:max-w-[500px] flex flex-col items-center justify-between gap-3">
				<div className="pt-[52px] w-full">
					<BagItem {...{
						email: "test@gmail.com",
						id: "asdasdasdsad"
					}}/>
				</div>
			</div>
		</div>
	) 
}