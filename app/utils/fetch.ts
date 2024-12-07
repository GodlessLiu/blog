export async function fetchData<T>(url: string,options?: RequestInit): Promise<T> {
  return fetch(url.startsWith("http")?url: process.env.DOMAIN+url,options)
    .then((response) => response.json())
    .then((data) => data as T)
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error;
    });
}