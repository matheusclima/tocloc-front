"use client";

import NavBar from "@/components/ui/navbar";
import React, { useState } from "react";

interface ProfileData {
  name: string;
  email: string;
  endereco: string;
}

const EditProfile: React.FC = () => {
  const [formData, setFormData] = useState<ProfileData>({
    name: "",
    email: "",
    endereco: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
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
          name="name"
          value={formData.name}
          onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Seu e-mail"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="phone" className="text-sm font-medium mb-1">Endereço</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.endereco}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Seu endereço"
        />
      </div>


      <button
        type="submit"
        className="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800 transition"
      >
        Salvar Alterações
      </button>
    </form>
    </div>
  );
};

export default EditProfile;