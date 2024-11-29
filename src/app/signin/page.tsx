import { ArrowLeft } from "lucide-react";
import Link from "next/link";
<<<<<<< HEAD
import Image from "next/image";
=======
>>>>>>> 6ba46052b3338c0b0b7db3bf3dfc6255eb61b01a

export default function SignIn() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center">
<<<<<<< HEAD
            <div className="flex items-center p-4 bg-white rounded-xl w-3/5">
                <Image src="/images/field1.jpg" alt="Tocloc" width={600} height={400} className="rounded-xl"/>
                <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
                    <Link href="/" className="text-blue-500 flex items-center mb-6 absolute -top-16 left-4">
                        <ArrowLeft className="mr-2" /> Voltar para Home
                    </Link>
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-600">Entrar em Tocloc</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                            <input type="email" id="email" className="w-full h-12 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                            <input type="password" id="password" className="w-full h-12 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" required />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Log In</button>
                    </form>
                    <div className="mt-4 text-center">
                        <Link href="/forgot-password" className="text-blue-500 hover:underline">Esqueceu a senha?</Link>
                    </div>
                    <p className="mt-4 text-center text-gray-600">
                        Não tem uma conta? <Link href="/signup" className="text-blue-500 hover:underline">Cadastre-se</Link>
                    </p>
                </div>
=======
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <Link href="/" className="text-blue-500 flex items-center mb-6">
                    <ArrowLeft className="mr-2" /> Back to Home
                </Link>
                <h2 className="text-3xl font-bold mb-6 text-center">Log in to Tocloc</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                        <input type="password" id="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Log In</button>
                </form>
                <div className="mt-4 text-center">
                    <Link href="/forgot-password" className="text-blue-500 hover:underline">Forgot password?</Link>
                </div>
                <p className="mt-4 text-center text-gray-600">
                    Don't have an account? <Link href="/signup" className="text-blue-500 hover:underline">Sign up</Link>
                </p>
>>>>>>> 6ba46052b3338c0b0b7db3bf3dfc6255eb61b01a
            </div>
        </div>
    )
}