'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export default function SignUp() {
    const [role, setRole] = useState('user')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center">
            <div className="flex items-center p-4 bg-white rounded-xl w-1/2 ">
                <Image src="/images/field1.jpg" alt="Tocloc" width={500} height={100} className="h-full object-cover rounded-xl" />
                <div className="bg-white pl-4 rounded-lg max-w-md w-full">
                    <Link href="/" className="text-blue-500 flex items-center mb-6">
                        <ArrowLeft className="mr-2" /> Voltar para Home
                    </Link>
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-600">Cadastro TOCLOC</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
                            <input type="text" id="name" className="w-full h-12 text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                            <input type="email" id="email" className="w-full h-12 text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 mb-2">Senha</label>
                            <input type="password" id="password" className="w-full h-12 text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2">Tipo de conta</label>
                            <div className="flex">
                                <button
                                    type="button"
                                    className={`flex-1 py-2 px-4 rounded-l-lg ${role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                    onClick={() => setRole('user')}
                                >
                                    Usuário
                                </button>
                                <button
                                    type="button"
                                    className={`flex-1 py-2 px-4 rounded-r-lg ${role === 'host' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                    onClick={() => setRole('host')}
                                >
                                    Locador
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Confirmar</button>
                    </form>
                    <p className="mt-4 text-center text-gray-600">
                        Ja possui uma conta? <Link href="/signin" className="text-blue-500 hover:underline">Entrar</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

