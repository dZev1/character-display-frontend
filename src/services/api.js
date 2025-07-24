const apiURL = 'http://localhost:8080'

export async function fetchCharacters (field = null, value = null) {
  let url = `${apiURL}/get_characters`

  if (field && value) {
    url += `?field=${field}&value=${value}`
  }

  const resp = await fetch(url)
  if (!resp.ok) {
    throw new Error(`HTTP error. Status: ${resp.status}`)
  }

  return await resp.json()
}
