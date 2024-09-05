import axios from "axios";

export const fetchSitemaps = async () => {
  const BASE_STRAPI_URL = process.env.SITEMAP_URL || "";
  const URL = `${BASE_STRAPI_URL}/api/sitemap`;
  try {
    const result = await axios.get(URL);
    return result.data;
  } catch (error: any) {
    console.log(error);

    return error.response.status;
  }
};
