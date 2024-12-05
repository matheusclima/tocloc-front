'use client'

import { Reservation } from "@/types/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Calendar, CircleAlert, CircleCheck, CircleX, Clock, Pencil, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Tag from "../ui/tag";

export default function TabelaDeReservas() {

    const [reservas, setReservas] = useState<Reservation[]>([
        { id: 1, fieldId: 1, startTime: new Date(2024, 11, 30, 9, 0, 0), endTime: new Date(2024, 11, 30, 11, 0, 0), userId: 1, status: 'confirmed' },
        { id: 2, fieldId: 1, startTime: new Date(2024, 11, 30, 14, 0, 0), endTime: new Date(2024, 11, 30, 16, 0, 0), userId: 3, status: 'pending' },
        { id: 3, fieldId: 2, startTime: new Date(2024, 11, 30, 18, 0, 0), endTime: new Date(2024, 11, 30, 19, 30, 0), userId: 5, status: 'cancelled' },
    ])

    const handleDelete = (id: number) => {
        setReservas(reservas.filter(reserva => reserva.id !== id))
    }

    return (
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
                    <TableRow key={reserva.id}>
                        <TableCell>{reserva.fieldId}</TableCell>
                        <TableCell>{format(reserva.startTime, 'dd/MM/yyyy')}</TableCell>
                        <TableCell>{format(reserva.startTime, 'HH:mm')}</TableCell>
                        <TableCell>{format(reserva.endTime, 'HH:mm')}</TableCell>
                        <TableCell>{reserva.userId}</TableCell>
                        {reserva.status === 'confirmed' ?
                            <TableCell className="text-green-500">
                                <Tag className="border-green-500">
                                    <CircleCheck className="h-4 w-4" />
                                    Confirmada
                                </Tag>
                            </TableCell> : reserva.status === 'pending' ?
                                <TableCell className="text-yellow-500">
                                    <Tag className="border-yellow-500">
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
                            <Button variant="ghost" size="icon" className={cn(
                                "text-blue-500",
                                "hover:text-blue-700"
                            )}>
                                <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon"
                                className={cn(
                                    "text-red-500",
                                    "hover:text-red-700"
                                )}
                                onClick={() => handleDelete(reserva.id)}
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}