'use client'
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
    const router = useRouter(); 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        router.push("/reset-password");
    };

    return (
        <>
            <Head>
                <title>Esqueci minha senha</title>
            </Head>
            <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
                <div className="flex flex-col lg:flex-row items-center p-4 bg-white rounded-xl w-full max-w-4xl">
                    
                    <div className="hidden lg:block w-1/2">
                        <Image src="/images/field1.jpg" alt="Tocloc" width={600} height={400} className="rounded-xl" />
                    </div>
                    <div className="bg-white p-8 rounded-lg w-full lg:w-1/2">
                        <Link href="/" className="text-gray-800 flex items-center mb-6 absolute -top-16 left-4">
                            <ArrowLeft className="mr-2" /> Voltar para Home
                        </Link>
                        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Recuperar senha</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-800 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full h-12 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                    placeholder="Digite seu email"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800"
                            >
                                Enviar link de recuperação
                            </button>
                        </form>
                        <p className="mt-4 text-center text-gray-800">
                            Lembrou a senha?{" "}
                            <Link href="/signin" className="text-blue-500 hover:underline">
                                Entrar
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
