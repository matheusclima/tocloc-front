import TabelaDeReservas from "@/components/tables/reservas";
import Card from "@/components/ui/card";

export default function BookingTable() {


    return (
        <main className="px-20 py-8">
            <Card>
                <TabelaDeReservas />
            </Card>
        </main>
    )
}