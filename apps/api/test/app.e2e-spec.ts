import * as request from 'supertest'
import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from '../src/app.module'
import { Player } from '../src/players/models/player.model'

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

const gql = '/graphql'

describe('GraphQL AppResolver (e2e) {Supertest}', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterAll(async () => {
    await app.close()
  })

  describe(gql, () => {
    describe('players', () => {
      it('should get all players', () => {
        return request(app.getHttpServer())
          .post(gql)
          .send({ query: '{players { id }}' })
          .expect(200)
          .expect((res) => {
            expect(res.body.data.players).toEqual(players)
          })
      })
      describe('query by player id', () => {
        it('should get a single player', () => {
          return request(app.getHttpServer())
            .post(gql)
            .send({ query: '{player(id: "2") { id }}' })
            .expect(200)
            .expect((res) => {
              expect(res.body.data.player).toEqual({
                id: '2',
              })
            })
        })
        it('should get an error for bad id', () => {
          const query = `\n{\n  player(id: "4") {\n    id\n  }\n}\n`

          return request(app.getHttpServer())
            .post(gql)
            .send({ query })
            .expect(200)
            .expect((res) => {
              expect(res.body.data).toBe(null)
              expect(res.body.errors[0].message).toBe('No player with id 4')
            })
        })
      })
    })
  })
})
