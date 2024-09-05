import { baseApi } from "./baseApi";

export const getGenerals = async () => {
  try {
    const [{ data: general }, { data: multilanguage }] = await Promise.all([
      baseApi.get(`/general?populate=deep`),
      baseApi.get(`/multilanguage?populate=deep`),
    ]);
    return { general: general.data, multilanguage: multilanguage.data };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
