import { Campo } from '@/types/types';
import React, { useState } from 'react';

interface Field {
  id: number;
  name: string;
  description: string;
  price: string;
  rented: boolean;
  selectedTime: string;
}

interface ModalProps {
  field: Campo;
  onClose: () => void;
  onTimeSelect: (time: string) => void;
}

const times = ['08:00', '10:00', '12:00', '14:00', '16:00'];

const Modal: React.FC<ModalProps> = ({ field, onClose, onTimeSelect }) => {
  const [selectedTime, setSelectedTime] = useState<string>('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">{field.nome} - Selecione o Horário</h2>
        <div className="space-y-2">
          {times.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                selectedTime === time ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <button onClick={onClose} className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-lg">
            Cancelar
          </button>
          <button
            onClick={() => onTimeSelect(selectedTime)}
            disabled={!selectedTime}
            className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
