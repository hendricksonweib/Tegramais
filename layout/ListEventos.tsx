'use client';

import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  link: string;
  isFree: boolean;
  language: string;
  level: string;
}

const ListEventos = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fakeEvents: Event[] = [
      {
        title: "Liderança e Gestão de Equipes",
        description: "Aprenda a liderar equipes, tomar decisões estratégicas e promover a cultura de feedback positivo.",
        date: "08 AGO",
        time: "14:00",
        link: "/events/1",
        isFree: true,
        language: "Inglês",
        level: "Intermediário"
      },
      {
        title: "Inteligência Emocional no Ambiente de Trabalho",
        description: "Desenvolva a capacidade de lidar com emoções de forma eficaz e melhore a comunicação e as relações no trabalho.",
        date: "11 - 14 AGO",
        time: "19:00 - 20:00",
        link: "/events/2",
        isFree: false,
        language: "Português",
        level: "Iniciante"
      },
      {
        title: "Gestão de Tempo e Produtividade",
        description: "Ensine a organizar o tempo de forma eficiente, melhorar a produtividade e evitar a procrastinação no trabalho.",
        date: "12 AGO",
        time: "19:00",
        link: "/events/3",
        isFree: false,
        language: "Português",
        level: "Avançado"
      }
    ];

    setEvents(fakeEvents);
  }, []);

  return (
    <div className="container mx-auto ">
    
      {events.length === 0 ? (
        <p>sem eventos no momento</p>
      ) : (
        events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            date={event.date}
            time={event.time}
            link={event.link}
            isFree={event.isFree}
            level={event.level}
          />
        ))
      )}
    </div>
  );
};

export default ListEventos;
