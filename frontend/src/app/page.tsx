"use client"

import Button from "@/components/Button";
import Info from "@/components/Info";
import TopBar from "@/components/TopBar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <TopBar/>
      <div className="container min-h-min flex-col gap-8 items-center text-center h-min">
        <div className="w-fit flex flex-col gap-6 pt-[52px]">
          <div className="flex flex-col gap-1">
            <h1 className="text-5xl font-lobster text-primary">Sangue bom</h1>
            <p>Um exercício de empatia</p>
          </div>
        </div>

        <Info {...{
          title: "Por que doar sangue é importante?",
          text: "A doação de sangue é um ato crucial que salva vidas. Além de fornecer sangue para pacientes em necessidade, também pode ajudar a identificar problemas de saúde em potencial no doador."
        }}/>
        <Info {...{
          title: "NFTs e Doação de Sangue",
          text: "A integração de NFTs nesta iniciativa visa reconhecer e recompensar os doadores. Cada doação pode ser registrada como um NFT único, incentivando a participação e criando uma comunidade envolvente."
        }}/>
        <Info {...{
          title: "Como você pode se envolver?",
          text: "Além de doar sangue, você pode se envolver compartilhando a iniciativa nas redes sociais, participando de eventos de conscientização e motivando outros a se juntarem à causa. Sua contribuição faz a diferença!"
        }}/>
        <Button {...{
          text: "Registrar Bolsa",
          onClick: () => router.push("/registrar-bolsa")
        }}/>
      </div>
    </main>
  )
}
