"use client";

import NavBar from "@/components/ui/navbar";
import api from "@/lib/api";
import { toast } from "sonner";

const EditProfile: React.FC = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario')!);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const body = {
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
      endereco: {
        rua: data.rua,
        numero: data.numero === '' ? 0 : data.numero,
        bairro: data.bairro,
        cidade: data.cidade,
        cep: data.cep,
      }

    }
    try {
      const response = await api.put(`/usuarios/${usuario.id}`, body);
      if(response.status === 200) {
        toast.success('Perfil atualizado com sucesso!');
        localStorage.setItem('usuario', JSON.stringify(response.data));
      }
    } catch (error) {
      toast.error('Erro ao atualizar perfil');
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-900 h-screen">
    
    <NavBar/>

    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold mb-4">Editar Perfil</h2>

      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium mb-1">Nome</label>
        <input
          type="text"
          id="name"
          name="nome"
          defaultValue={usuario?.nome}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Seu nome"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium mb-1">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={usuario?.email}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Seu e-mail"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="telefone" className="text-sm font-medium mb-1">Telefone</label>
        <input
          type="phone"
          id="telefone"
          name="telefone"
          defaultValue={usuario?.telefone}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Seu telefone"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="rua" className="text-sm font-medium mb-1">Rua</label>
        <input
          type="text"
          id="rua"
          name="rua"
          defaultValue={usuario?.endereco?.rua}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Sua rua"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="numero" className="text-sm font-medium mb-1">Número</label>
        <input
          type="number"
          id="numero"
          name="numero"
          defaultValue={usuario?.endereco?.numero}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Seu número"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="bairro" className="text-sm font-medium mb-1">Bairro</label>
        <input
          type="text"
          id="bairro"
          name="bairro"
          defaultValue={usuario?.endereco?.bairro}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Seu bairro"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="cidade" className="text-sm font-medium mb-1">Cidade</label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          defaultValue={usuario?.endereco?.cidade}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Sua cidade"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="cep" className="text-sm font-medium mb-1">CEP</label>
        <input
          type="text"
          id="cep"
          name="cep"
          defaultValue={usuario?.endereco?.cep}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Seu CEP"
        />
      </div>


      <button
        type="submit"
        className="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800 transition"
      >
        Salvar Alterações
      </button>
    </form >
    </div >
  );
};

export default EditProfile;