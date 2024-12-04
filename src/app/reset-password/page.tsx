'use client'
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/signin");
    };

    return (
        <>
            <Head>
                <title>Redefinir Senha</title>
            </Head>
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="flex items-center p-4 bg-white rounded-xl w-3/5">
                    <Image src="/images/field1.jpg" alt="Tocloc" width={600} height={400} className="rounded-xl" />
                    <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
                        <Link href="/" className="text-gray-800 flex items-center mb-6 absolute -top-16 left-4">
                            <ArrowLeft className="mr-2" /> Voltar para Home
                        </Link>
                        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Redefinir Senha</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="new-password" className="block text-gray-800 mb-2">Nova Senha</label>
                                <input
                                    type="password"
                                    id="new-password"
                                    className="w-full h-12 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                    placeholder="Digite sua nova senha"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="confirm-password" className="block text-gray-800 mb-2">Confirme a Senha</label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    className="w-full h-12 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                    placeholder="Confirme sua nova senha"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800"
                            >
                                Redefinir Senha
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
