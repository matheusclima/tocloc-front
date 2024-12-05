'use client';

import { useEffect, useState } from 'react';
import NavBar from '../../components/ui/navbar';
import { useRouter } from 'next/navigation';
import { Estabelecimento } from '@/types/types';
import api from '@/lib/api';

export default function SearchEstablishment() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [establishments, setEstablishments] = useState<Estabelecimento[]>([]);

  useEffect(() => {
    const getEstablishments = async () => {
      try {
        const response = await api.get('/estabelecimentos');
        setEstablishments(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getEstablishments();
  }, []);

  const handleClick = (id: number) => {
    router.push(`/establishments/${id}`);
  };

  const filteredEstablishments = establishments.filter((establishment) =>
    `${establishment.nome} ${establishment.descricao} ${establishment.endereco?.cidade}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <header className="bg-gray-800 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Encontre o Local Perfeito</h1>
        <p className="text-lg mb-6">
          Pesquise por locais esportivos disponíveis para fazer sua reserva.
        </p>
        <div className="max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Digite o nome do esporte, estabelecimento ou localização..."
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black shadow-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <main className="container mx-auto px-6 mt-12">
        {filteredEstablishments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEstablishments.map((establishment) => (
              <div
                key={establishment.id}
                className="bg-white rounded-xl shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
                onClick={() => handleClick(establishment.id)}
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{establishment.nome}</h2>
                  <p className="text-gray-600 text-sm mb-3">{establishment.descricao}</p>
                  <div className="flex items-center text-gray-500 mt-4">
                    <span role="img" aria-label="location" className="mr-2">
                      📍
                    </span>
                    {establishment.endereco?.cidade}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            Nenhum estabelecimento encontrado. Tente outro termo de pesquisa.
          </p>
        )}
      </main>
    </div>
  );
}
