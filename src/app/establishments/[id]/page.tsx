'use client';
import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import { useParams } from 'next/navigation'; 


interface Field {
  id: number;
  name: string;
  description: string;
  price: string;
}

interface EstablishmentFields {
  [key: number]: Field[];
}


const fieldsData: EstablishmentFields = {
  1: [
    { id: 1, name: 'Campo 1', description: 'Campo para futebol society', price: 'R$ 100/h' },
    { id: 2, name: 'Campo 2', description: 'Campo para beach tennis', price: 'R$ 80/h' },
  ],
  2: [
    { id: 1, name: 'Campo A', description: 'Campo para futebol society', price: 'R$ 120/h' },
    { id: 2, name: 'Campo B', description: 'Campo para futvôlei', price: 'R$ 90/h' },
  ],
  3: [
    { id: 1, name: 'Quadra 1', description: 'Quadra para beach tennis', price: 'R$ 60/h' },
    { id: 2, name: 'Quadra 2', description: 'Quadra para futvôlei', price: 'R$ 50/h' },
  ],
};

export default function EstablishmentDetail() {
  const { id } = useParams(); 

  const [fields, setFields] = useState<Field[]>([]);

  useEffect(() => {
    if (id && typeof id === 'string') {
      const fieldsForEstablishment = fieldsData[parseInt(id)];
      if (fieldsForEstablishment) {
        setFields(fieldsForEstablishment);
      }
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <header className="bg-gray-800 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Campos Disponíveis</h1>
        <p className="text-lg mb-6">
          Selecione um campo para fazer sua reserva.
        </p>
      </header>

      <main className="container mx-auto px-6 mt-12">
        {fields.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fields.map((field) => (
              <div
                key={field.id}
                className="bg-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
                onClick={() => alert(`Campo ${field.name} selecionado!`)} 
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {field.name}
                  </h2>
                  <p className="text-gray-600">{field.description}</p>
                  <p className="text-gray-500 mt-4">{field.price}</p>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Alugar
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            Nenhum campo disponível encontrado.
          </p>
        )}
      </main>
    </div>
  );
}
