import { Player } from './models/player.model';
import { PlayersService } from './players.service';
export declare class PlayersResolver {
    private playersService;
    constructor(playersService: PlayersService);
    players(): Player[];
    player(id: string): Promise<Player>;
}
