import { Module } from '@nestjs/common'
import { PlayersResolver } from './players.resolvers';
import { PlayersService } from './players.service';

@Module({
  providers: [PlayersResolver, PlayersService],
})
export class PlayersModule {}
