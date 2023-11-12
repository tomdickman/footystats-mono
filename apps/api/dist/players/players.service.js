"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayersService = void 0;
const common_1 = require("@nestjs/common");
const players = [
    {
        id: '1',
    },
    {
        id: '2',
    },
    {
        id: '3',
    },
];
let PlayersService = class PlayersService {
    async findOneById(id) {
        const player = players.find(player => player.id === id);
        if (!player) {
            throw new Error(`No player with id ${id}`);
        }
        return player;
    }
    getPlayers() {
        return players;
    }
};
exports.PlayersService = PlayersService;
exports.PlayersService = PlayersService = __decorate([
    (0, common_1.Injectable)()
], PlayersService);
//# sourceMappingURL=players.service.js.map