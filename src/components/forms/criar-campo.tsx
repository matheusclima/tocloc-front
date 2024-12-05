'use client'

import api from "@/lib/api";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

export default function CriarCampoForm({ setIsOpen, id }: { setIsOpen: Dispatch<SetStateAction<boolean>>, id: number }) {
    
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const body = {
            estabelecimentoId: id,
            nome: data.nome,
            valor: data.valor,
            tamanho: data.tamanho,
            tipo: data.tipo,
        }
        try {
            const response = await api.post(`/estabelecimentos/${id}/campos`, body);
            if (response.status === 201) {
                toast.success('Campo cadastrado criado com sucesso!');
                setIsOpen(false);
            }
        } catch (error) {
            toast.error('Erro ao criar campo');
            console.error(error);

        }
    }

    return (
        <form className="grid gap-4 py-4" onSubmit={onSubmit}>
            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="nome" className="text-right">Nome</label>
                <input
                    id="nome"
                    name="nome"
                    className="px-4 col-span-3 border border-gray-300 h-10"
                />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="valor" className="text-right">Valor por hr</label>
                <input
                    id="valor"
                    type="number"
                    name="valor"
                    className="px-4 col-span-3 border border-gray-300 h-10"
                />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="tamanho" className="text-right">Tamanho</label>
                <input
                    id="tamanho"
                    name="tamanho"
                    className="px-4 col-span-3 border border-gray-300 h-10"
                />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="tipo" className="text-right">Tipo</label>
                <input
                    id="tipo"
                    name="tipo"
                    className="px-4 col-span-3 border border-gray-300 h-10"
                />
            </div>

            <div className="flex items-center justify-center gap-4">
                <Button type="submit" className="col-span-4">Criar Campo</Button>
                <Button type="reset" variant={'destructive'} className="col-span-4">Limpar Campos</Button>
            </div>
        </form>
    )
}