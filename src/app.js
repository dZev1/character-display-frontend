import { fetchAllCharacters } from './services/api'

export async function App () {
  const allChars = await fetchAllCharacters()

  return `
    <h1> PERSONAJES </h1>
    ${allChars.map(char => `
        <div>
          <h2>${char.name}</strong></h2>

          <p><strong>Species:</strong> ${char.race}</p>
          
          <img src="${char.image}" width="300" height="300" align="center">

          <ul>
            ${Object.entries(char.stats).map(([stat, value]) => `
                <li><strong>${stat.toUpperCase()}</strong>: ${value}</li>`).join('')}
          </ul>
        </div>
    `).join('')}
    `
}
