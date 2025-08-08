// components/EventCard.tsx
import React from "react";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  link: string;
  isFree: boolean;
  level: string;
}

const EventCard = ({
  title,
  description,
  date,
  time,
  link,
  isFree,
}: EventCardProps) => {
  return (
  <div className="bg-black text-white p-4 rounded-md mb-4 border border-gray-600">
  <h3 className="text-xl font-bold">{title}</h3>
  <hr className="my-4 border-gray-600" />
  <p>{description}</p>
  <p className="text-sm text-gray-400">{date} {time}</p>
  <a href={link} className={`text-blue-500 ${isFree ? 'text-green-500' : ''}`}>Saiba Mais</a>
</div>

  );
};

export default EventCard;
