const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID
const redirectURI = `${process.env.NEXT_PUBLIC_URL}/callback/discord`

export function getDiscordURL() {
  return `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=code&scope=identify%20email%20guilds`
}

export async function getDiscordTokens({ code }) {
  try {
    const baseURL = "https://discord.com/api/oauth2/token"

    let params = new URLSearchParams()
    params.append("client_id", clientId)
    params.append("client_secret", process.env.DISCORD_CLIENT_SECRET)
    params.append("grant_type", "authorization_code")
    params.append("code", code)
    params.append("redirect_uri", redirectURI)
    params.append("scope", "identify email")

    const response = await fetch(baseURL, {
      body: params,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
      }
    })

    return await response.json()
  } catch (error) {
    console.log({ error })
  }
}

export async function getDiscordUser({ access_token }) {
  try {
    const url = "https://discord.com/api/users/@me"

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })

    return await response.json()
  } catch (error) {
    console.log({ error })
  }
}
