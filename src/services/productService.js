import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCategories = async () => {
  try {
    const response = await api.get("/api/categories/all-categories");
    // // connsole.log("response category: ", response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getProducts = async (query) => {
  try {
    // // connsole.log("fetching products ... : ", query);

    let filter = {};
    query.color && (filter.color = query.color);
    query.tag && (filter.tag = query.tag);
    query.size && (filter.size = query.size);
    query.gender && (filter.gender = query.gender);
    query.category && (filter.category = query.category);
    query.sortBy && (filter.sortBy = query.sortBy);
    query.limit && (filter.limit = query.limit);

    const response = await api.get("/api/products/get/get-all-products", {
      params: filter,
    });
    // // connsole.log("response products: ", response.data);

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const searchProducts = async (query) => {
  try {
    const response = await api.get(`/api/products/get/get-all-products`, {
      params: {
        search: query,
      },
    });
    // // connsole.log("response search: ", response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getProductDetails = async (id) => {
  try {
    const response = await api.get(`/api/products/get/${id}`);
    // // connsole.log("response products: ", response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getBlockbusterDeals = async () => {
  try {
    const response = await api.get(
      "/api/products/get/get-all-products?tag=Blockbuster"
    );
    // // connsole.log("response Blockcuster: ", response.data.data);

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getHomeBanners = async () => {
  try {
    const response = await api.get(
      "/api/products/get/get-all-products?tag=banner"
    );
    // // connsole.log("response Home Banners: ", response.data.data);

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
