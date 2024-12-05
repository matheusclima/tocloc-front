'use client'

import { LogOut, UserCog } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { useRouter } from "next/navigation";

export default function UserMenu() {
    const router = useRouter();
    const usuario = JSON.parse(localStorage.getItem('usuario')!);

    const handleLogout = () => {
        localStorage.removeItem('usuario');
        router.push('/');
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="hover:cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                    <AvatarFallback>MC</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Olá, {usuario.nome}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {usuario.tipo === 'usuario' &&
                    <DropdownMenuItem className="hover:cursor-pointer" onClick={() => router.push(`/${usuario.id}/edit-profile`)}>
                        <UserCog size={20} />
                        <span>Perfil</span>
                    </DropdownMenuItem>
                }
                {usuario.tipo === 'locador' &&
                    <DropdownMenuItem className="hover:cursor-pointer" onClick={() => router.push(`/admin/${usuario.id}`)}>
                        <UserCog size={20} />
                        <span>Painel de Administrador</span>
                    </DropdownMenuItem>
                }
                <DropdownMenuItem onClick={handleLogout} className="hover:cursor-pointer">
                    <LogOut size={20} />
                    <span>Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}