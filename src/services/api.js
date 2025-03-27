const apiURL = "http://localhost:3000";

export async function fetchAllCharacters() {
    const resp = await fetch(`${apiURL}/get_characters`);
    if (!resp.ok) {
        throw new Error(`HTTP error. Status: ${resp.status}`)
    }

    const respObject = await resp.json();
    return respObject;
}