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
  campaign: '2d9f5517-e513-4b9e-bab5-0d46ba2ad614',
  campaign_key:
    'B0FUpe79T9y7h0TlmrKQpy2fVRflE0ueurUNRroq1hQ=.Wv5bHZhAfaPIic2LNJKPjVBEDF8NCKdcPl6hAgTKamM='
}

export const configVest: ClaimTokenRequestArgs = {
  claimServer: 'https://rewards.decentraland.org',
  campaign: '2d9f5517-e513-4b9e-bab5-0d46ba2ad614',
  campaign_key:
    'vEiD3FinRpa9HG+xa4U4TS2fVRflE0ueurUNRroq1hQ=.MNH2pcpVpKeEetzqzhY3vPLyLzwpNyLzb7LG7js7dQI='
}
export const configCap: ClaimTokenRequestArgs = {
  claimServer: 'https://rewards.decentraland.org',
  campaign: '2d9f5517-e513-4b9e-bab5-0d46ba2ad614',
  campaign_key:
    'hP9HkTJyS2KPoiGHNDOEZC2fVRflE0ueurUNRroq1hQ=.VuaWGlUbcypiFTPexU6CHZ8KQpWLL34X7h0ea/G2fxM='
}
