'use client'

import { Estabelecimento, Reserva } from "@/types/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Calendar, CircleAlert, CircleCheck, CircleX, Clock, Pencil, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Tag from "../ui/tag";
import { useParams } from "next/navigation";
import api from "@/lib/api";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import FormDialog from "../ui/form-dialog";
import EditarReservaForm from "../forms/edit-reserva";

export default function TabelaDeReservas() {
    const [estabelecimentos, setEstabelecimentos] = useState<Estabelecimento[]>([])
    const [reservas, setReservas] = useState<Reserva[]>([]);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [selectedEstablishment, setSelectedEstablishment] = useState<number>(0);
    const { id } = useParams();

    useEffect(() => {
        const getEstablishments = async () => {
            try {
                const response = await api.get(`/usuarios/${id}/estabelecimentos`);
                setEstabelecimentos(response.data);
                setSelectedEstablishment(response.data[0].id);
            } catch (error) {
                console.error(error);
            }
        }
        getEstablishments();
    }, [id]);

    useEffect(() => {
        const getBookings = async () => {
            try {
                if (!selectedEstablishment) return;
                const response = await api.get(`/estabelecimentos/${selectedEstablishment}/reservas`);
                setReservas(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getBookings();
    }, [selectedEstablishment]);

    const handleDelete = async (id: number) => {
        try {
            await api.delete(`/reservas/${id}`);
            setReservas(reservas.filter((reserva) => reserva.id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    const handleConfirm = async (id: number) => {
        try {
            await api.patch(`/reservas/${id}/status`, { status: 'confirmada' });
            setReservas(reservas.map((reserva) => {
                if (reserva.id === id) {
                    return { ...reserva, status: 'confirmada' }
                }
                return reserva;
            }));
        } catch (error) {
            console.error(error);
        }
    }

    const handleCancel = async (id: number) => {
        try {
            await api.patch(`/reservas/${id}/status`, { status: 'cancelada' });
            setReservas(reservas.map((reserva) => {
                if (reserva.id === id) {
                    return { ...reserva, status: 'cancelada' }
                }
                return reserva;
            }));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="flex items-center gap-4">
                <label htmlFor="estabelecimento">
                    <span className="mr-4">Estabelecimento:</span>
                    <select id='estabelecimento' name="estabelecimento"
                        className="border border-gray-300 h-8 rounded-lg px-4 text-gray-600" defaultValue={""} onChange={(e) => setSelectedEstablishment(+e.target.value)}>
                        {estabelecimentos.map((estabelecimento) => (
                            <option key={estabelecimento.id} value={estabelecimento.id}>{estabelecimento.nome}</option>
                        ))}
                    </select>
                </label>
            </div>
            {!selectedEstablishment ? <p>Selecione um estabelecimento</p> :
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Campo</TableHead>
                            <TableHead>
                                <Calendar className="h-4 w-4 inline mr-2" />
                                Data
                            </TableHead>
                            <TableHead>
                                <Clock className="h-4 w-4 inline mr-2" />
                                Início
                            </TableHead>
                            <TableHead>
                                <Clock className="h-4 w-4 inline mr-2" />
                                Fim
                            </TableHead>
                            <TableHead>Dono da Reserva</TableHead>
                            <TableHead>
                                Status
                            </TableHead>
                            <TableHead>Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {reservas.map((reserva) => (
                            <TableRow key={reserva.id} className="hover:bg-slate-200">
                                <TableCell>{reserva.campo.nome}</TableCell>
                                <TableCell>{format(reserva.data, 'dd/MM/yyyy')}</TableCell>
                                <TableCell>
                                    {format(new Date(`1970-01-01T${reserva.horarioInicio}`), 'HH:mm')}
                                </TableCell>
                                <TableCell>
                                    {format(new Date(`1970-01-01T${reserva.horarioFim}`), 'HH:mm')}
                                </TableCell>
                                <TableCell>{reserva.usuario.nome}</TableCell>
                                {reserva.status === 'confirmada' ?
                                    <TableCell className="text-green-500">
                                        <Tag className="border-green-500">
                                            <CircleCheck className="h-4 w-4" />
                                            Confirmada
                                        </Tag>
                                    </TableCell> : reserva.status === 'pendente' ?
                                        <TableCell className="text-amber-500">
                                            <Tag className="border-amber-500">
                                                <CircleAlert className="h-4 w-4" />
                                                Pendente
                                            </Tag>
                                        </TableCell> :
                                        <TableCell className="text-red-500">
                                            <Tag className="border-red-500">
                                                <CircleX className="h-4 w-4" />
                                                Cancelada
                                            </Tag>
                                        </TableCell>

                                }
                                <TableCell>
                                    <Button onClick={() => handleConfirm(reserva.id)}
                                        variant="ghost" size="icon" className="text-emerald-600">
                                        <CircleCheck className="h-4 w-4" />
                                    </Button>

                                    <Button onClick={() => handleCancel(reserva.id)}
                                        variant="ghost" size="icon" className="text-rose-600">
                                        <CircleX className="h-4 w-4" />
                                    </Button>

                                    <FormDialog
                                        title="Editar Reserva"
                                        description="Edite os campos da reserva."
                                        isOpen={openEditDialog}
                                        setIsOpen={setOpenEditDialog}
                                    >
                                        <EditarReservaForm setIsOpen={setOpenEditDialog} reserva={reserva} setReservas={setReservas} />
                                    </FormDialog>
                                    <Button variant="ghost" size="icon" onClick={() => setOpenEditDialog(true)}
                                        className={cn(
                                            "text-blue-500",
                                            "hover:text-blue-700"
                                        )}
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </Button>


                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="ghost" size="icon"
                                                className={cn(
                                                    "text-red-500",
                                                    "hover:text-red-700"
                                                )}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogTitle>Excluir Reserva</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Deseja realmente excluir a reserva? A ação é irreversível.
                                            </AlertDialogDescription>
                                            <AlertDialogFooter>
                                                <AlertDialogAction asChild>
                                                    <Button className="bg-destructive hover:bg-destructive/80" onClick={() => handleDelete(reserva.id)}>Excluir</Button>
                                                </AlertDialogAction>
                                                <AlertDialogCancel asChild>
                                                    <Button variant="outline">Cancelar</Button>
                                                </AlertDialogCancel>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>}
        </>
    )
}