'use client'
import TabelaDeEstabelecimentos from "@/components/tables/estabelecimentos";
import TabelaDeReservas from "@/components/tables/reservas";
import Card from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function BookingTable() {
    const [painel, setPainel] = useState('estabelecimentos');

    return (
        <main className="flex flex-1 items-start gap-8 pr-8">
            <div className="h-full bg-gray-800 w-[15%] flex flex-col py-10 items-start gap-2 z-50">
                <p className="text-white text-xl place-self-center mb-8">Painel de Administrador</p>
                <button onClick={() => setPainel('estabelecimentos')}
                    className={cn(
                        "text-white text-base text-start w-full py-4 px-10  hover:bg-gray-700",
                        painel === 'estabelecimentos' && "bg-gray-900"
                    )}
                >Estabelecimentos</button>
                <button onClick={() => setPainel('reservas')}
                    className={cn(
                        "text-white text-base text-start w-full py-4 px-10 hover:bg-gray-700",
                        painel === 'reservas' && "bg-gray-900"
                    )}
                >Reservas</button>
            </div>
            <Card className="flex-1 mt-12">
                {painel === 'estabelecimentos' && <TabelaDeEstabelecimentos />}
                {painel === 'reservas' && <TabelaDeReservas />}
            </Card>
        </main>
    )
}