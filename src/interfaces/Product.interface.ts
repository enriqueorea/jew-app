export interface Product {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  details: string;
  image: SanityImage[];
  name: string;
  price: number;
  slug: Slug;
}

export interface Slug {
  _type: string;
  current: string;
}

export interface SanityImage {
  _type: string;
  _key: string;
  asset: Asset;
}

export interface Asset {
  _ref: string;
  _type: string;
}
