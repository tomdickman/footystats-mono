import { Args, ID, Query, Resolver, ResolveField } from '@nestjs/graphql'

import { Player } from './models/player.model'
import { PlayersService } from './players.service'

@Resolver(() => Player)
export class PlayersResolver {
  constructor(private playersService: PlayersService) {}

  @Query(() => [Player])
  players() {
    return this.playersService.getPlayers()
  }

  @Query(() => Player)
  async player(@Args('id', { type: () => ID }) id: string) {
    return this.playersService.findOneById(id)
  }
}
