// Faz a requisição e converte os dados p/ JSON
/*
export const fetchJson = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url);
  const jsonData = await rawData.json();

  return jsonData;
};
*/

export async function fetchJson<T>(url: string): Promise<T> {
  const rawData = await fetch(url);
  const jsonData = await rawData.json();

  return jsonData;
}
