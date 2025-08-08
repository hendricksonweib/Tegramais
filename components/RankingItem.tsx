// components/RankingItem.tsx
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Progress } from "./ui/progress"
import { Badge } from "./ui/badge"
import { cn } from "../lib/utils"

interface RankingItemProps {
  position: number
  name: string
  xp: number
  totalXp: number
  avatarUrl?: string
}

export function RankingItem({ position, name, xp, totalXp, avatarUrl }: RankingItemProps) {
  const percentage = (xp / totalXp) * 100
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()

  const borderColors: Record<number, string> = {
  1: "border-yellow-400",
  2: "border-purple-500",
  3: "border-gray-400",
  // fallback opcional para os demais
}

  return (
    <div className="flex items-center gap-4 py-2">
      <span className="text-xl font-bold w-6 text-right">{position}º</span>

      <Avatar className={cn("border-2", borderColors[position] || "border-green-500")}>
        {avatarUrl ? (
          <AvatarImage src={avatarUrl} />
        ) : (
          <AvatarFallback>{initials}</AvatarFallback>
        )}
      </Avatar>

      <div className="flex-1">
        <div className="flex justify-between">
          <span className="font-semibold text-white">{name}</span>
          <span className="text-sm text-muted-foreground">{`XP ${xp} / ${totalXp}`}</span>
        </div>
        <Progress value={percentage} className="h-2 mt-1" />
      </div>
    </div>
  )
}
