import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImage } from "~/interfaces/Product.interface";

const client: ClientConfig = {
  projectId: "efrgjtrx",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-03-07",
};

export const sanityClient = createClient(client);

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImage) => builder.image(source);
