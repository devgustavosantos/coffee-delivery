import { useEffect, useState } from 'react';

import { Product, Tag } from '@/types/product';
import { customFetch } from '@/utils/customFetch';

import { StockContext } from './';
import { FetchInfosResponse, StockProviderProps } from './Stock.types';

export function StockProvider({ children }: StockProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    async function fetchInfos(type: 'products' | 'tags') {
      try {
        const response = await customFetch<FetchInfosResponse>(
          `/products/infos/${type}.json`,
        );

        return response;
      } catch (error) {
        throw new Error(
          `>>> An error occurred while trying to get the ${type}! >>>` + error,
        );
      }
    }

    async function fetchTags() {
      const infoObtained = await fetchInfos('tags');

      if (!infoObtained) return;

      const areTheyTags = infoObtained.every((tag) => 'title' in tag);

      if (!areTheyTags) return;

      setTags(infoObtained);
    }

    async function fetchProducts() {
      const infoObtained = await fetchInfos('products');

      if (!infoObtained) return;

      const areTheyProducts = infoObtained.every(
        (product) => 'description' in product,
      );

      if (!areTheyProducts) return;

      const productFormatted = infoObtained.map((product) => {
        const thisProductTags = product.tags.map((tag) => {
          const tagFound = tags.find((item) => item.id === tag);

          if (!tagFound) {
            throw new Error(
              `>>> There was a problem formatting the tags of product with id ${product.id}!`,
            );
          }

          return tagFound;
        });

        return {
          ...product,
          tags: thisProductTags,
        };
      });

      setProducts(productFormatted);
    }

    if (products.length && tags.length) return;

    if (!tags.length) {
      fetchTags();

      return;
    }

    if (!products.length) fetchProducts();
  }, [products, tags]);

  return (
    <StockContext.Provider value={{ products }}>
      {children}
    </StockContext.Provider>
  );
}
