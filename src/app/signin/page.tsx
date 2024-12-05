'use client'
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import api from "@/lib/api";

export default function SignIn() {
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.email.value;
        const senha = form.password.value;
        try {
            const response = await api.post('/auth/login', {
                email, senha
            });
            console.log(response);
            if (response.status === 201) {
                toast.success('Login efetuado com sucesso');
                localStorage.setItem('usuario', JSON.stringify(response.data));
                window.history.back();
            }
        } catch (error) {
            console.error(error);
            toast.error('Erro ao fazer login');
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
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Entrar em Tocloc</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-800 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full h-12 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-800 mb-2">Senha</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full h-12 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800"
                        >
                            Log In
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <Link href="/forgot-password" className="text-blue-500 hover:underline">
                            Esqueceu a senha?
                        </Link>
                    </div>
                    <p className="mt-4 text-center text-gray-800">
                        Não tem uma conta?{" "}
                        <Link href="/signup" className="text-blue-500 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
