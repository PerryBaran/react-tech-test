import axios from "axios";

const getImages = async (query) => {
  if (!query) return Promise.resolve([]);
  try {
    const response = await axios.get(`https://images-api.nasa.gov/search?q=${query}`);
    const imageResults = response.data.collection.items;
    const parsedImages = imageResults.filter((image) => {
      return image.data[0].media_type === "image";
    });
    const images = parsedImages.map((image) => {
      return image.links[0].href;
    });
    return images;
  } catch (err) {
    console.error(err);
  }
};

export default getImages;