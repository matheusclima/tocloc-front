'use client';
import { useState } from 'react';
import Link from 'next/link'; 
import NavBar from './components/NavBar';// Importando o componente Link do Next.js

export default function Home() {
  return (
    <>
    <NavBar/>
      <main className="container mx-auto px-4 mt-10 text-center relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/fundo-home.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 py-20">
          <h1 className="text-4xl font-bold mb-4 text-white">Reserve Seu Campo Online!</h1>
          <p className="text-lg mb-6 text-white">
            Agende partidas de futebol ou beach tennis com facilidade e rapidez.
          </p>
          <Link href="searchEstablishment" className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-lg">
            Saiba Mais
          </Link>
        </div>
      </main>

      <section id="about" className="container mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold mb-4">Sobre Nós</h2>
        <p>
          A TocLoc oferece uma plataforma fácil para reservar campos e quadras esportivas. Seja futebol, beach tennis ou eventos, temos o espaço ideal para você.
        </p>
      </section>

      <section id="services" className="container mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold mb-6">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img src="/images/society.jpg" alt="Futebol" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Campos de Futebol</h3>
              <p>Alugue campos de futebol society para seu time.</p>
            </div>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img src="/images/beach-tennis.jpg" alt="Beach Tennis" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Quadras de Beach Tennis</h3>
              <p>Reserve quadras para partidas de beach tennis.</p>
            </div>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img src="/images/esportes.webp" alt="Eventos" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Eventos Esportivos</h3>
              <p>Organize eventos esportivos com nosso suporte.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold mb-4">Contato</h2>
        <p>Entre em contato conosco:</p>
        <ul className="list-disc pl-6">
          <li>Email: tocloc@gmail.com</li>
          <li>Telefone: (85) 99999-9999</li>
          <li>Endereço: Rua do Esporte, 123, Fortaleza - CE</li>
        </ul>
      </section>

      <footer className="bg-gray-800 text-white text-center py-4 mt-20">
        <p>&copy; 2024 TocLoc. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
