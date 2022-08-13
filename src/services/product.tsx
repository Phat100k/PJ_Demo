import api from "../constants/api"

export interface Product {
    id: string,
    name: string
    
}
export interface SearchResult<T> {
  data: T[];
  pagination: Pagination;
}

export interface Pagination {
    count: number;
    currentPage: number;
    nextPage: number;
    perPage: number;
    totalPage: number;
}
export const getProducts = async (query=""): Promise<SearchResult<Product>> => {
  const res = await api.get(`/product${query}`);
  return res.data;
};
const productService = {
    getProduct(query = ''){
        // return fetch (`${API}/product${query}`).then(res => res.json())
        return api.get(`/product${query}`)
    },
    getCategory(){
        return api.get('/categories')
    }
}
export default productService