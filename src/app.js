import { fetchCharacters } from './services/api'

export async function App () {
  const allUserChars = await fetchCharacters()

  return `
    <h1> PERSONAJES </h1>
    ${allUserChars.map(char => `
        <div>
          <h2>${char.name}</strong></h2>
          <h3>Submitted by: ${char.username}</h3>
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
