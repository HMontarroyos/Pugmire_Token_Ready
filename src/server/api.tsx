export async function fetchDevTo() {
  const response = await fetch(
    `https://dev.to/api/articles?username=hmontarroyos`
  );
  const data = await response.json();
  return data;
}
