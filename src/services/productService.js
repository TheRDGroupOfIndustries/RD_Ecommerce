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
    // console.log("response category: ", response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};


export const getProducts = async (query) => {
  try {
    // console.log("fetching products ... : ", query);

    let filter = {}
    query.color && (filter.color = query.color)
    query.tag && (filter.tag = query.tag)
    query.size && (filter.size = query.size)
    query.category && (filter.category = query.category)
    query.sortBy && (filter.sortBy = query.sortBy)
    query.limit && (filter.limit = query.limit)

    
    const response = await api.get("/api/products/get/get-all-products",{
      params: filter
    });
    // console.log("response products: ", response.data);

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
    // console.log("response search: ", response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getProductDetails = async (id) => {
  try {
    const response = await api.get(`/api/products/get/${id}`);
    // console.log("response products: ", response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getBlockbusterDeals = async () => {
  try {
    const response = await api.get("/api/products/get/get-all-products?tag=Blockbuster");
    // console.log("response Blockcuster: ", response.data.data);

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};


export const getHomeBanners = async () => {
  try {
    const response = await api.get("/api/products/get/get-all-products?tag=banner");
    // console.log("response Home Banners: ", response.data.data);

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}