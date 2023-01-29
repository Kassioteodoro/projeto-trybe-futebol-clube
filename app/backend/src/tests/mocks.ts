import Team from "../database/models/Team";


export const responseTeamAll = [
    { id: 1, teamName: 'Avaí/Kindermann' },
    { id: 2, teamName: 'Bahia' },
    { id: 3, teamName: 'Botafogo' },
    { id: 4, teamName: 'Corinthians' },
    { id: 5, teamName: 'Cruzeiro' },
    { id: 6, teamName: 'Ferroviária' },
    { id: 7, teamName: 'Flamengo' },
    { id: 8, teamName: 'Grêmio' },
    { id: 9, teamName: 'Internacional' },
    { id: 10, teamName: 'Minas Brasília' },
    { id: 11, teamName: 'Napoli-SC' },
    { id: 12, teamName: 'Palmeiras' },
    { id: 13, teamName: 'Real Brasília' },
    { id: 14, teamName: 'Santos' },
    { id: 15, teamName: 'São José-SP' },
    { id: 16, teamName: 'São Paulo' }
  ] as unknown;

export const responseTeamId = { id: 3, teamName: 'Botafogo' } as unknown;

export const responseMatchAll = [
    {
      id: 1,
      homeTeamId: 16,
      homeTeamGoals: 1,
      awayTeamId: 8,
      awayTeamGoals: 1,
      inProgress: 0,
      homeTeam: {teamName: 'São Paulo'},
      awayTeam: {teamName: 'Grêmio'}
    },
    {
      id: 2,
      homeTeamId: 9,
      homeTeamGoals: 1,
      awayTeamId: 14,
      awayTeamGoals: 1,
      inProgress: 0,
      homeTeam: {teamName: 'Internacional'},
      awayTeam: {teamName: 'Santos'}
    },
    {
      id: 3,
      homeTeamId: 4,
      homeTeamGoals: 3,
      awayTeamId: 11,
      awayTeamGoals: 0,
      inProgress: 0,
      homeTeam: {teamName: 'Corinthians'},
      awayTeam: {teamName: 'Napoli-SC'}
    },
] as unknown

export const responseMatchInProgress = [
  {
    id: 41,
    homeTeamId: 16,
    homeTeamGoals: 2,
    awayTeamId: 9,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: 'São Paulo'
    },
    awayTeam: {
      teamName: 'Internacional'
    }
  },
  {
    id: 42,
    homeTeamId: 6,
    homeTeamGoals: 1,
    awayTeamId: 1,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: 'Ferroviária'
    },
    awayTeam: {
      teamName: 'Avaí/Kindermann'
    }
  },
  {
    id: 43,
    homeTeamId: 11,
    homeTeamGoals: 0,
    awayTeamId: 10,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: 'Napoli-SC'
    },
    awayTeam: {
      teamName: 'Minas Brasília'
    }
  },
] as unknown

export const responseMatchEnd = [
  {
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 1,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'São Paulo'
    },
    awayTeam: {
      teamName: 'Grêmio'
    }
  },
  {
    id: 2,
    homeTeamId: 9,
    homeTeamGoals: 1,
    awayTeamId: 14,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Internacional'
    },
    awayTeam: {
      teamName: 'Santos'
    }
  },
  {
    id: 3,
    homeTeamId: 4,
    homeTeamGoals: 3,
    awayTeamId: 11,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Corinthians'
    },
    awayTeam: {
      teamName: 'Napoli-SC'
    }
  },
  {
    id: 4,
    homeTeamId: 3,
    homeTeamGoals: 0,
    awayTeamId: 2,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Botafogo'
    },
    awayTeam: {
      teamName: 'Bahia'
    }
  },
] as unknown

export const responseCreateMatch = {
  id: 66,
  homeTeamId: 16,
  awayTeamId: 8,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
  inProgress: true
} as unknown

export const mockToken = {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NzQ5MzkwNzMsImV4cCI6MTY3NTAyNTQ3M30.tBVgq1OPUcbodazzb6j54e7VUoqZAlRYzfuidfeqMyU"
}
export const responseUserGet = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
} as unknown

export const responseJwtValidate = {
  id: 1,
  role: 'admin',
  email: 'admin@admin.com',
  iat: 1674959131,
  exp: 1675045531
} as unknown
