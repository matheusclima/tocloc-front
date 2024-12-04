'use client';
import { useState } from 'react';
import NavBar from '../../components/ui/navBar'
import { useRouter } from 'next/navigation';


const establishments = [
  {
    id: 1,
    name: 'No Alvo',
    location: 'Fortaleza, CE',
    description: 'Variedade de locais para a prática de esportiva como futebol Society e Beach Tennis.',
  },
  {
    id: 2,
    name: 'Arena Champions',
    location: 'Fortaleza, CE',
    description: 'Local perfeito para futebol society.',
  },
  {
    id: 3,
    name: 'Arena 085',
    location: 'Fortaleza, CE',
    description: 'Ideal para partidas de Beach Tennis e Futvôlei.',
  },
  {
    id: 4,
    name: 'Mesa Farta',
    location: 'Rio de Janeiro, RJ',
    description: 'Ideal para partidas de Vôlei de praia e Futvôlei.',
  },
];

export default function SearchEstablishment() {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/establishments/${id}`);
  };
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEstablishments = establishments.filter((establishment) =>
    `${establishment.name} ${establishment.description} ${establishment.location}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar/>
      <header className="bg-gray-800 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Encontre o Local Perfeito</h1>
        <p className="text-lg mb-6">
          Pesquise por locais esportivos disponíveis para fazer sua reserva.
        </p>
        <div className="max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Digite o nome do esporte, estabelecimento ou localização..."
            className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <main className="container mx-auto px-6 mt-12">
        {filteredEstablishments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer	">
            {filteredEstablishments.map((establishment) => (
              <div
                key={establishment.id}
                className="bg-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                onClick={() => handleClick(establishment.id)}
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {establishment.name}
                  </h2>
                  <p className="text-gray-600">{establishment.description}</p>
                  <p className="text-gray-500 mt-4">📍 {establishment.location}</p>
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
