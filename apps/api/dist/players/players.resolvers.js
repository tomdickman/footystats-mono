"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const player_model_1 = require("./models/player.model");
const players_service_1 = require("./players.service");
let PlayersResolver = class PlayersResolver {
    constructor(playersService) {
        this.playersService = playersService;
    }
    players() {
        return this.playersService.getPlayers();
    }
    async player(id) {
        return this.playersService.findOneById(id);
    }
};
exports.PlayersResolver = PlayersResolver;
__decorate([
    (0, graphql_1.Query)(() => [player_model_1.Player]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayersResolver.prototype, "players", null);
__decorate([
    (0, graphql_1.Query)(() => player_model_1.Player),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlayersResolver.prototype, "player", null);
exports.PlayersResolver = PlayersResolver = __decorate([
    (0, graphql_1.Resolver)(() => player_model_1.Player),
    __metadata("design:paramtypes", [players_service_1.PlayersService])
], PlayersResolver);
//# sourceMappingURL=players.resolvers.js.map