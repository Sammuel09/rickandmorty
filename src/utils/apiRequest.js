const baseUrl = "https://rickandmortyapi.com/api";

export const request = async (path, id = "") => {
  try {
    const res = await fetch(`${baseUrl}/${path}/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
