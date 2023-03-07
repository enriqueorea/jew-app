import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { sanityClient } from "~/utils/client";
import type { Product } from "~/interfaces/Product.interface";

export const productsRouter = createTRPCRouter({
  getProducts: publicProcedure.query(async () => {
    const products = await sanityClient.fetch<Product[]>(
      `*[_type == "products"]`
    );
    return products;
  }),
});
