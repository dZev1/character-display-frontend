import { fetchAllCharacters } from "./services/api";

export async function App() {
    const allChars = await fetchAllCharacters();
    
    return `

    <h1>Hello, World!</h1>
    ${allChars.map(char => `
        <p><strong>${char.name}</strong></p>
        <p>${char.race}</p>
        <img src="${char.image}" width="300" height="300" align="center">
        <hr>
    `).join("")}
    
    
    `;
}