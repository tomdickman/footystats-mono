import { Player } from './models/player.model';
export declare class PlayersService {
    findOneById(id: string): Promise<Player>;
    getPlayers(): Player[];
}
