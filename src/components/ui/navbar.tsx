import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 flex items-center justify-between py-4">
                <a className="text-xl font-bold" href="#">TocLoc</a>
                <div className="space-x-4">
                    <a href="#home" className="hover:text-gray-300">Home</a>
                    <a href="#about" className="hover:text-gray-300">Sobre</a>
                    <a href="#services" className="hover:text-gray-300">Serviços</a>
                    <a href="#contact" className="hover:text-gray-300">Contato</a>
                    <Link href="/signin">
                        <button className="bg-blue-900   hover:bg-blue-800 text-white px-4 py-2 rounded">
                            Login
                        </button>
                    </Link>
                    <Link href="/signup">
                        <button className="bg-sky-100 hover:bg-sky-200 text-black px-4 py-2 rounded">
                            Cadastro
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}