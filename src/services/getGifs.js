const getGif = async (category, filter) => {
  const url = `${process.env.REACT_APP_URL}search?q=${category}&limit=${filter}&lang=es&api_key=${process.env.REACT_APP_APY_KEY}`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map(({ id, username, title, rating, images }) => ({
    id,
    username,
    title,
    rating,
    url: images?.fixed_height_downsampled?.url,
  }));

  return gifs;
};

export default getGif;
