import { Injectable } from '@nestjs/common'
import { Player } from './models/player.model';

const players: Player[] = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
]

@Injectable()
export class PlayersService {
  async findOneById(id: string): Promise<Player> {
    const player = players.find(player => player.id === id)

    if (!player) {
      throw new Error(`No player with id ${id}`)
    }

    return player
  }

  getPlayers(): Player[] {
    return players
  }
}
