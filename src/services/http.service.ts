export async function getText(url: string) {
  try {
    return await fetch(url).then((response) => response.text());
  } catch (error) {
    console.error(error);
    return "";
  }
}
