'use client'
import Link from 'next/link';
import UserMenu from '../menus/user-menu';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [usuario, setUsuario] = useState<any>(null);

  useEffect(() => {
    // Só acessa o localStorage no lado do cliente
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <nav className="bg-gray-800 text-white h-[72px] shadow shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          <Link className="text-xl font-bold" href="/">TocLoc</Link>

          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">Sobre</a>
            <a href="#services" className="hover:text-gray-300">Serviços</a>
            <a href="#contact" className="hover:text-gray-300">Contato</a>
          </div>

          <div className="flex space-x-2">
            {usuario ?
              <UserMenu /> :
              <>
                <Link href="/signin">
                  <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded">
                    Login
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="bg-sky-100 hover:bg-sky-200 text-black px-4 py-2 rounded">
                    Cadastro
                  </button>
                </Link>
              </>
            }
          </div>
        </div>
      </nav>
    </>
  );
}