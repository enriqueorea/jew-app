import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { sanityClient } from "~/utils/client";

export const slugSchema = z.object({
  _type: z.string(),
  current: z.string(),
});

export const productsSchema = z.object({
  _createdAt: z.date(),
  _id: z.string(),
  _rev: z.string(),
  _type: z.string(),
  _updatedAt: z.date(),
  details: z.string(),
  image: z.array(z.any()),
  name: z.string(),
  price: z.number(),
  slug: slugSchema,
});

export const productsRouter = createTRPCRouter({
  getProducts: publicProcedure.query(async () => {
    const products = await sanityClient.fetch(`*[_type == "products"]`);
    return products;
  }),
});
