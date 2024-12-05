'use client';

import { useState, useEffect } from 'react';
import NavBar from '../../../components/ui/navbar';
import { useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import api from '@/lib/api';
import { Campo } from '@/types/types';
import FormDialog from '@/components/ui/form-dialog';
import CriarReservaForm from '@/components/forms/criar-reserva';
import { Button } from '@/components/ui/button';

const reviews = [
  { id: 1, user: 'Arthur Diogenes', rating: 5, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 2, user: 'Paulo Luan', rating: 3, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 3, user: 'Matheus Cavalcante', rating: 4, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 4, user: 'Juliane', rating: 2, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 5, user: 'Rodrigo Braga', rating: 5, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
];

export default function EstablishmentDetail() {
  const { id } = useParams();
  const [fields, setFields] = useState<Campo[]>([]);
  const [selectedField, setSelectedField] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getEstablishment = async () => {
      try {
        console.log(id)
        const response = await api.get(`/estabelecimentos/${id}`);
        setFields(response.data.campos);
      } catch (error) {
        console.error(error);
      }
    }
    getEstablishment();
  }, [id]);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 left-4 bg-gray-800 text-white p-2 rounded-full flex items-center hover:bg-gray-700"
        aria-label="Voltar"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <header className="bg-gray-800 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Campos Disponíveis</h1>
        <p className="text-lg mb-6">Selecione um local e horário para fazer sua reserva.</p>
      </header>

      <main className="container mx-auto px-6 mt-12">
        {fields.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fields.map((field) => (
              <div key={field.id} className="bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{field.nome}</h2>
                  <p className="text-gray-600">{field.tipo}</p>
                  <p className="text-gray-500 my-4">R$ {field.valor}/h</p>
                  <Button onClick={() => {
                    setSelectedField(field.id)
                    setIsOpen(true)
                  }} className="text-white px-4 py-2 rounded-lg">
                    Alugar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">Nenhum campo disponível encontrado.</p>
        )}

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Opinião de quem já alugou:</h2>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{review.user}</h3>
                  <div className="flex">{renderStars(review.rating)}</div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <FormDialog
        title="Adicionar Reserva"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <CriarReservaForm setIsOpen={setIsOpen}campoId={selectedField}/>
      </FormDialog>
    </div>
  );
}
