'use client';

import Link from "next/link";
import TopBarOption from "./TopBarOption";

const TopBar: React.FC = ({

}) => {
	return (
        <>
            <div className="bg-white w-full bg-emerald-800 sticky top-0 mb-[-52px]">
                <div className="mx-auto p-3">
                    <div className="flex justify-between items-center">
                        <Link href="/">
                            <h1 className="text-lg font-lobster text-primary">Sangue bom</h1>
                        </Link>
                        <ul className="flex gap-x-6 text-black text-sm">
                            <TopBarOption {...{
                                text: "Registrar bolsa",
                                path: "/registrar-bolsa"
                            }}/>
                            <TopBarOption {...{
                                text: "Lista de Bolsas",
                                path: "/lista-de-bolsas"
                            }}/>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBar;