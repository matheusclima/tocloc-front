'use client'

import { Estabelecimento } from "@/types/types";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import FormDialog from "../ui/form-dialog";
import CriarEstabelecimentoForm from "../forms/criar-estabelecimento";
import { useParams } from "next/navigation";
import { Edit, Trash2 } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";

export default function TabelaDeEstabelecimentos() {
    const [estabelecimentos, setEstabelecimentos] = useState<Estabelecimento[]>([])
    const [isOpen, setIsOpen] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const getEstablishments = async () => {
            try {
                const response = await api.get(`/usuarios/${id}/estabelecimentos`);
                console.log(response);
                setEstabelecimentos(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getEstablishments();
    }, [id]);

    const deleteEstablishment = async (id: number) => {
        try {
            await api.delete(`/estabelecimentos/${id}`);
            setEstabelecimentos(estabelecimentos.filter((estabelecimento) => estabelecimento.id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <FormDialog
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title="Adicionar Estabelecimento"
                description="Adicione um novo estabelecimento ao sistema. Defina também seus campos."
            >
                <CriarEstabelecimentoForm setIsOpen={setIsOpen}/>
            </FormDialog>
            <Button
                className="mb-4"
                onClick={() => setIsOpen(true)}>
                Adicionar Estabelecimento
            </Button>
            <ul>
                {estabelecimentos.map((estabelecimento) => (
                    <li className="border p-4 rounded-xl bg-[#f9f9f9] text-gray-800 mb-4"
                        key={estabelecimento.id}>
                        <div className="flex justify-between gap-auto">
                            <div>
                                <p className="text-2xl font-bold">{estabelecimento.nome}</p>
                                <p>{estabelecimento.descricao}</p>
                                <p>Contato: {estabelecimento.telefone}</p>
                                <p>Endereço: {estabelecimento.endereco.rua}, {estabelecimento.endereco.numero} - {estabelecimento.endereco.bairro}</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <Button variant={'ghost'}>
                                    <Edit className="w-6 h-6 text-blue-700" />
                                </Button>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button variant={'ghost'}>
                                            <Trash2 className="w-6 h-6 text-red-700" />
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogTitle>
                                            Deseja realmente excluir?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Esta ação é irreversível. Após a exclusão, o estabelecimento não poderá ser recuperado.
                                        </AlertDialogDescription>
                                        <AlertDialogAction asChild>
                                            <Button onClick={() => deleteEstablishment(estabelecimento.id)}>Excluir</Button>
                                        </AlertDialogAction>
                                        <AlertDialogCancel asChild>
                                            <Button className="text-black">Cancelar</Button>
                                        </AlertDialogCancel>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

        </>
    )
}