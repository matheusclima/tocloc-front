'use client';
import Link from 'next/link';
import NavBar from '../components/ui/navbar';

export default function Home() {
  return (
    <>
      <div className='bg-gray-900 text-white'>
        <NavBar />
        <main className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/fundo-home.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 py-32 px-4 text-center">
            <h1 className="text-5xl font-extrabold mb-6 text-white leading-tight">
              Reserve Seu Campo Online com Facilidade!
            </h1>
            <p className="text-lg mb-8 text-white max-w-xl mx-auto">
              Agende partidas de futebol, beach tennis ou outros esportes com rapidez e praticidade, diretamente do seu celular ou computador.
            </p>
            <Link
              href="searchEstablishment"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition duration-300 transform hover:scale-105"
            >
              Faça sua reserva agora!
            </Link>
          </div>
        </main>

        
        <section id="about" className="container mx-auto px-4 mt-32 text-center">
          <h2 className="text-4xl font-bold mb-6">Sobre Nós</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
            A TocLoc é a sua parceira ideal para reservar campos e quadras esportivas com praticidade e rapidez. Nossa plataforma conecta
            apaixonados por esportes a locais perfeitos para futebol, beach tennis, vôlei e muito mais.
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Seja para treinos regulares ou momentos especiais, a TocLoc garante que você encontre o lugar perfeito com total confiança.
          </p>
        </section>

        
        <section id="services" className="container mx-auto px-4 mt-20">
          <h2 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <img
                src="/images/society.jpg"
                alt="Futebol"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-white mb-3">Campos de Futebol</h3>
                <p className="text-gray-300">Alugue campos de futebol society para seu time e divirta-se com seus amigos.</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <img
                src="/images/beach-tennis.jpg"
                alt="Beach Tennis"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-white mb-3">Quadras de Beach Tennis</h3>
                <p className="text-gray-300">Reserve quadras para partidas de beach tennis e desfrute de bons momentos.</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <img
                src="/images/esportes.webp"
                alt="Eventos"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-white mb-3">Eventos Esportivos</h3>
                <p className="text-gray-300">Organize eventos esportivos com nossa estrutura e apoio especializado.</p>
              </div>
            </div>
          </div>
        </section>

        
        <div className="container mx-auto px-4 mt-24 flex flex-col md:flex-row justify-between items-center">
          <section id="contact" className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Contato</h2>
            <p className="text-lg text-gray-300 mb-6">Entre em contato conosco através dos nossos canais:</p>
            <ul className="list-disc pl-6 text-gray-300">
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

        <footer className="bg-gray-800 text-white text-center py-4 mt-24">
          <p>&copy; 2024 TocLoc. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}
