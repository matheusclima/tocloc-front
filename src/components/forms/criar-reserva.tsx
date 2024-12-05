'use client'
import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import api from "@/lib/api";

export default function CriarReservaForm({ setIsOpen, campoId }: { setIsOpen: Dispatch<SetStateAction<boolean>>, campoId: number}) {
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        try {
            const storedUser = localStorage.getItem('usuario');
            if (!storedUser) {
                throw new Error('Usuário não encontrado no localStorage');
            }

            const usuario = JSON.parse(storedUser);
            const body = {
                ...data,
                usuarioId: usuario.id
            }
            const response = await api.post(`/campos/${campoId}/reservas`, body);
            if(response.status === 201) {
                toast.success('Reserva criada com sucesso');
            }
        } catch (error) {
            console.error(error);
            toast.error('Erro ao criar reserva');                    
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
                    className="px-4 col-span-3 border border-gray-300 h-10"
                />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="horarioInicio" className="text-right">Horario Inicio</label>
                <input
                    id="horarioInicio"
                    type="time"
                    name="horarioInicio"
                    className="px-4 col-span-3 border border-gray-300 h-10"
                />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="horarioFim" className="text-right">Horario Fim</label>
                <input
                    id="horarioFim"
                    type="time"
                    name="horarioFim"
                    className="px-4 col-span-3 border border-gray-300 h-10"
                />
            </div>

            <div className="flex items-center justify-center gap-4">
                <Button type="submit">Criar Reserva</Button>
                <Button type='button' variant='outline' onClick={() => setIsOpen(false)} >Cancelar</Button>
            </div>
        </form>
    )
}