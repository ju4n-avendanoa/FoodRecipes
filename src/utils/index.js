export async function fetchRecipes(filter) {
  const { query, limit } = filter;

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${
    import.meta.env.VITE_REACT_APP_EDAMAN_APP_ID
  }&app_key=${
    import.meta.env.VITE_REACT_APP_EDAMAN_API_KEY
  }&from=0&to=${limit}`;

  const response = await fetch(url);

  const data = await response.json();
  return data?.hits;
}

export async function fetchRecipe(id) {
  const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${
    import.meta.env.VITE_REACT_APP_EDAMAN_APP_ID
  }&app_key=${import.meta.env.VITE_REACT_APP_EDAMAN_API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
