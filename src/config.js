const API_BASE_URL = "https://www.googleapis.com";

export async function apiGET(queryString) {
    
    const result =  await fetch(`${API_BASE_URL}${queryString}`).then(response => response.json())
    return result;
}