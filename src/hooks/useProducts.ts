import { IProduct } from "@/interfaces/products";
import useSWR, { Key, SWRConfiguration } from "swr";

export const useProducts = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<IProduct[]>(`/api/${url}`, config);

  return {
    products: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
