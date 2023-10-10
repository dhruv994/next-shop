export async function fetchJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`request failed ${response.status}`);
    }
    return response.json();
}