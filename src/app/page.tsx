'use client';
import Link from 'next/link'; 
import NavBar from '../components/ui/navbar';

export default function Home() {
  return (
    <>
    <div className='bg-gray-900 text-white'>
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
          A TocLoc é a sua parceira ideal na hora de reservar campos e quadras esportivas com praticidade e rapidez. Nossa plataforma foi criada para conectar apaixonados por esportes a espaços perfeitos para jogar futebol, beach tennis, vôlei e muito mais.
        </p>
        <br />
        <p>
        Seja para um jogo com os amigos, treinos regulares ou celebrações únicas, a TocLoc está aqui para garantir que você encontre o lugar ideal de forma simples e confiável.
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

      <div className="container mx-auto px-4 mt-20 flex flex-col md:flex-row justify-between">
      <section id="contact" className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Contato</h2>
        <p>Entre em contato conosco:</p>
        <ul className="list-disc pl-6">
          <li>Email: tocloc@gmail.com</li>
          <li>Telefone: (85) 99999-9999</li>
          <li>Endereço: Rua do Esporte, 123, Fortaleza - CE</li>
        </ul>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4722.479419099293!2d-38.480635924292464!3d-3.7687699433803674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c745fe9c03245d%3A0xd435fd5a6bfbbe44!2sUNIFOR%20-%20Universidade%20de%20Fortaleza!5e1!3m2!1spt-BR!2sbr!4v1733145121742!5m2!1spt-BR!2sbr"
        width="100%"
        height="200"
        className="mt-8 md:mt-0 md:w-1/2"
        loading="lazy"
      ></iframe>
    </div>

      <footer className="bg-gray-800 text-white text-center py-4 mt-20">
        <p>&copy; 2024 TocLoc. Todos os direitos reservados.</p>
      </footer>
      </div>
    </>
  );
}
