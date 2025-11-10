import axios from "axios";

export const fetchAllProducts = async (category: string | null, sort: string) => {
  try {
    let url = `${import.meta.env.VITE_API_URL}/products`
    if(category && category.trim().length){
      url += `/category/${category}`
    }
    if(sort && sort.trim().length){
      url += `?sort=${sort}`
    }
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchSingleProduct = async (id: number) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchAllCategories = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export const fetchAllCartItems = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/carts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};