'use client'

import api from "@/lib/api";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";
import { useParams } from "next/navigation";

export default function CriarEstabelecimentoForm({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    const [startTime, setStartTime] = useState<string>("");
    const [endTime, setEndTime] = useState<string>("");
    const { id } = useParams();

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const body = {
            usuarioId: id,
            nome: data.nome,
            descricao: data.descricao,
            telefone: data.telefone,
            horarioInicio: data.startTime,
            horarioFim: data.endTime,
            endereco: {
                rua: data.rua,
                numero: data.numero,
                bairro: data.bairro,
                cidade: data.cidade,
                cep: data.cep
            }
        }
        try {
            const response = await api.post('/estabelecimentos', body);
            console.log(response);
            if (response.status === 201) {
                toast.success('Estabelecimento criado com sucesso!');
                setIsOpen(false);
            }
        } catch (error) {
            toast.error('Erro ao criar estabelecimento');
            console.error(error);

        }
    }

    const generateTimeOptions = (): string[] => {
        const times: string[] = [];
        for (let hour = 0; hour < 24; hour++) {
            const hourString = String(hour).padStart(2, "0");
            times.push(`${hourString}:00`, `${hourString}:30`);
        }
        return times;
    };

    const timeOptions = generateTimeOptions();

    const handleChangeStartTime = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStartTime(event.target.value);
    };

    const handleChangeEndTime = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setEndTime(event.target.value);
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
                <label htmlFor="descricao" className="text-right">Descrição</label>
                <input
                    id="descricao"
                    name="descricao"
                    className="px-4 col-span-3 border border-gray-300 h-10"
                />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="telefone" className="text-right">Telefone</label>
                <input
                    id="telefone"
                    name="telefone"
                    className="px-4 col-span-3 border border-gray-300 h-10"
                />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <select
                    id="start-time-selector"
                    name="startTime"
                    value={startTime}
                    onChange={handleChangeStartTime}
                    style={{ marginLeft: "10px", padding: "5px" }}
                    className="col-start-2 col-span-1"
                >
                    <option value="" disabled>
                        Horário de Início
                    </option>
                    {timeOptions.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
                <select
                    id="end-time-selector"
                    name="endTime"
                    value={endTime}
                    onChange={handleChangeEndTime}
                    style={{ marginLeft: "10px", padding: "5px" }}
                    className="col-span-1"
                >
                    <option value="" disabled>
                        Horário de Fim
                    </option>
                    {timeOptions.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </div>

            {/* Address Fields */}
            <span className="text-base font-semibold">Endereço: </span>
            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="rua" className="text-right">Rua</label>
                <input
                    id="rua"
                    name="rua"
                    className="px-4 col-span-3 border border-gray-300 h-10"
                />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="numero" className="text-right">Número</label>
                <input
                    id="numero"
                    name="numero"
                    className="px-4 col-span-3 border border-gray-300 h-10"
                />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="bairro" className="text-right">Bairro</label>
                <input
                    id="bairro"
                    name="bairro"
                    className="px-4 col-span-3 border border-gray-300 h-10"
                />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="cidade" className="text-right">Cidade</label>
                <input
                    id="cidade"
                    name="cidade"
                    className="px-4 col-span-3 border border-gray-300 h-10"
                />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="cep" className="text-right">CEP</label>
                <input
                    id="cep"
                    name="cep"
                    className="px-4 col-span-3 border border-gray-300 h-10"
                />
            </div>
            <div className="flex items-center justify-center gap-4">
                <Button type="submit" className="col-span-4">Criar Estabelecimento</Button>
                <Button type="reset" variant={'destructive'} className="col-span-4">Limpar Campos</Button>
            </div>
        </form>
    )
}