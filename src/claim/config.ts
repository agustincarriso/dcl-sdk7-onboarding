export type ClaimConfigInstType = {
  campaign: string
  campaignKeys: Record<string, string>
}

export const USE_CAPTCHA: boolean = true

export type ClaimTokenRequestArgs = {
  claimServer: string
  campaign: string
  campaign_key: string
}
export const configEmote: ClaimTokenRequestArgs = {
  claimServer: 'https://rewards.decentraland.org',
  campaign: '4f39311b-8bd6-4dc0-b481-d2d12350a1b7',
  campaign_key:
    'eyJpZCI6IjJhNjY0NGY4LWIxNzEtNDZlNC05ZDJmLTIzZmYwNzJiNWU3ZSIsImNhbXBhaWduX2lkIjoiNGYzOTMxMWItOGJkNi00ZGMwLWI0ODEtZDJkMTIzNTBhMWI3In0=.WboJjCfelGNKUnq8Lm7bC5J0Zp9Nf54PjLcjd3ZkCVc='
}

export const configVest: ClaimTokenRequestArgs = {
  claimServer: 'https://rewards.decentraland.org',
  campaign: '4f39311b-8bd6-4dc0-b481-d2d12350a1b7',
  campaign_key:
    'eyJpZCI6IjVmMjA4OGRhLTc4MmYtNDk0OS05YmQyLTcyM2ZiZTRmY2U1NiIsImNhbXBhaWduX2lkIjoiNGYzOTMxMWItOGJkNi00ZGMwLWI0ODEtZDJkMTIzNTBhMWI3In0=.8WlZ55X7hsVaRHK35niEoOxcrCtPNCy7-0HDZ12ikn4='
}
