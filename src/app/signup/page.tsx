'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import api from '@/lib/api'
import { toast } from 'sonner'

export default function SignUp() {
    const router = useRouter()
    const [role, setRole] = useState('user')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const body = {
            nome: formData.get('name') as string,
            email: formData.get('email') as string,
            senha: formData.get('password') as string,
            tipo: role,
        }
        try {
            const response = await api.post('/usuarios', body)
            if (response.status === 201) {
                toast.success('Conta criada com sucesso')
                router.push('/signin')
            }
        } catch (error) {
            console.error(error)
            toast.error('Erro ao criar conta')
        }
    }

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="flex items-center p-4 bg-white rounded-xl w-full max-w-4xl shadow-lg overflow-hidden">
                {/* Imagem com comportamento responsivo */}
                <div className="hidden lg:block w-1/2">
                    <Image
                        src="/images/field1.jpg"
                        alt="Tocloc"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>

                {/* Formulário */}
                <div className="bg-white p-8 w-full lg:w-1/2 relative">
                    <Link href="/" className="text-gray-800 flex items-center mb-6 absolute -top-16 left-4">
                        <ArrowLeft className="mr-2" /> Voltar para Home
                    </Link>
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Cadastro Tocloc</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-800 mb-2">Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full h-12 text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-800 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full h-12 text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-800 mb-2">Senha</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full h-12 text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-800 mb-2">Tipo de conta</label>
                            <div className="flex">
                                <button
                                    type="button"
                                    className={`flex-1 py-2 px-4 rounded-l-lg ${role === 'user' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-800'}`}
                                    onClick={() => setRole('user')}
                                >
                                    Usuário
                                </button>
                                <button
                                    type="button"
                                    className={`flex-1 py-2 px-4 rounded-r-lg ${role === 'host' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-800'}`}
                                    onClick={() => setRole('host')}
                                >
                                    Locador
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800"
                        >
                            Confirmar
                        </button>
                    </form>
                    <p className="mt-4 text-center text-gray-800">
                        Já possui uma conta? <Link href="/signin" className="text-blue-500 hover:underline">Entrar</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
