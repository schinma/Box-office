const API_BASE_URL = "https://www.googleapis.com";

export async function apiGET(queryString) {
    
    const result =  await fetch(`${API_BASE_URL}${queryString}&maxResults=40`).then(response => response.json())
    console.log(result);
    return result;
}