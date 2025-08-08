// components/Ranking.tsx
import { RankingItem } from "../components/RankingItem"

const users = [
  {
    position: 1,
    name: "Ana Souza",
    xp: 14780,
    totalXp: 14780,
    avatarUrl: "/avatars/freddy.jpg",
  },
  {
    position: 2,
    name: "João Silva",
    xp: 6750,
    totalXp: 14780,
    avatarUrl: "/avatars/caio.jpg",
  },
  {
    position: 3,
    name: "Maria Oliveira",
    xp: 6650,
    totalXp: 14780,
  },
  {
    position: 4,
    name: "Pedro Costa",
    xp: 5840,
    totalXp: 14780,
  },
  {
    position: 5,
    name: "Lucas Pereira",
    xp: 5570,
    totalXp: 14780,
  },
]

export function RankingDaSemana() {
  return (
    <div className="p-6 rounded-lg max-w-md w-full">
      <h2 className="text-lg font-bold text-muted-foreground mb-4">RANKING DA SEMANA</h2>

      {users.map(user => (
        <RankingItem key={user.position} {...user} />
      ))}

    </div>
  )
}
