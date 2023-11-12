import { Test } from '@nestjs/testing'
import { Player } from './models/player.model'
import { PlayersResolver } from './players.resolvers'
import { PlayersService } from './players.service'

describe('Players Resolver', () => {
  let resolver: PlayersResolver

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        PlayersResolver,
        {
          provide: PlayersService,
          useFactory: () => ({
            getPlayers: jest.fn<Player[], []>(() => [
              {
                id: '1',
              },
            ]),
            findOneById: jest.fn<Player, [string]>((id) => ({
              id,
            })),
          }),
        },
      ],
    }).compile()

    resolver = module.get(PlayersResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  describe('players', () => {
    it('should get all players', () => {
      expect(resolver.players()).toEqual([
        {
          id: '1',
        },
      ])
    })
  })
  describe('player', () => {
    it('should get one player', () => {
      expect(resolver.player('1')).resolves.toEqual({
        id: '1',
      })
    })
  })
})
