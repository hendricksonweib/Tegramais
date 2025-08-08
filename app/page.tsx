import React from 'react';
import HomeHeader from 'layout/HomeHeader'; 
import { RankingDaSemana } from 'layout/RankingDaSemana'; 
import ListEventos from 'layout/ListEventos';
import Image from 'next/image';
import Banner from "../public/Banner Paisagem Planos De Saúde Clínica Popular Moderno Verde E Branco(2).jpg"
export default function Page() {
  return (
    <>
      <HomeHeader>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
             <Image
                      src={Banner} 
                      alt="Banner"
                      width={1200}
                      height={500}
                      className="mb-4 w-full object-cover rounded-md transition-all"
                    />
            <h1 className="text-2xl font-extrabold text-gray-200 leading-tight mb-1">
              Veja o que vem aí
            </h1>
            <p className="text-1xl text-gray-400 mb-2">
              Descubra as novidades do Tegramais, sua plataforma de cursos e treinamentos corporativos.
            </p>
            <ListEventos/>
          </div>

          <div>
            <RankingDaSemana />
          </div>
        </div>
      </HomeHeader>
    </>
  );
}
