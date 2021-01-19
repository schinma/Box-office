const API_BASE_URL = "https://www.googleapis.com";

export async function apiGET(queryString) {
    
    const url = `${API_BASE_URL}${queryString}`
    const result =  await fetch(url).then(response => response.json()).catch(error => { throw error });
    return result;
}