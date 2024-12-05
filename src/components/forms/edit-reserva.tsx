'use client'
import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import api from "@/lib/api";
import { Reserva } from "@/types/types";

export default function EditarReservaForm({ setIsOpen, reserva, setReservas }: { 
    setIsOpen: Dispatch<SetStateAction<boolean>>, 
    reserva: Reserva,
    setReservas: Dispatch<SetStateAction<Reserva[]>>
}) {
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        
        try {
            const response = await api.put(`/reservas/${reserva.id}`, data);
            if(response.status === 200) {
                setReservas((reservas) => {
                    const index = reservas.findIndex((r) => r.id === reserva.id);
                    reservas[index] = {
                        ...reserva,
                        ...data
                    };
                    return [...reservas];
                });
                toast.success('Reserva atualizada com sucesso');
            }
        } catch (error) {
            console.error(error);
            toast.error('Erro ao editar reserva');                    
        } finally {
            setIsOpen(false);
        }
    }

    return (
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="data" className="text-right">Data</label>
                <input
                    id="data"
                    type="date"
                    name="data"
                    required
                    defaultValue={new Date(reserva.data).toISOString().split('T')[0]}
                    className="px-4 col-span-3 border border-gray-300 h-10"
                />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="horarioInicio" className="text-right">Horario Inicio</label>
                <input
                    id="horarioInicio"
                    type="time"
                    name="horarioInicio"
                    required
                    defaultValue={new Date(reserva.horarioInicio).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    className="px-4 col-span-3 border border-gray-300 h-10"
                />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="horarioFim" className="text-right">Horario Fim</label>
                <input
                    id="horarioFim"
                    type="time"
                    name="horarioFim"
                    required
                    defaultValue={new Date(reserva.horarioFim).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    className="px-4 col-span-3 border border-gray-300 h-10"
                />
            </div>

            <div className="flex items-center justify-center gap-4">
                <Button type="submit" 
                >
                    Atualizar Reserva</Button>
                <Button type='button' variant='outline' onClick={() => setIsOpen(false)} >Cancelar</Button>
            </div>
        </form>
    )
}