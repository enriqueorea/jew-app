/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

import MainLayout from "~/components/layouts/MainLayout";
import { Section } from "~/components/ui";
import type { Product } from "~/interfaces/Product.interface";
import { sanityClient, urlFor } from "~/utils/client";

interface IProps {
	product: Product;
}

const ProductDetails: NextPage<IProps> = ({ product }) => {
	const producImage: string =
		"image" in product ? urlFor(product.image[0]!).url() : "/herovariant.png";

	const [image, setImage] = useState<string>(producImage);

	return (
		<MainLayout title={product.name} description={product.details}>
			<div className="mt-24 grid place-content-center mx-auto h-full w-full gap-4">
				<div className="w-full flex flex-col md:flex-row h-full items-center justify-center">
					<div className="flex flex-col gap-4 items-center">
						<div className="relative w-[350px] h-[350px] md:w-[500px]">
							<Image
								src={image}
								alt={product.slug.current}
								fill
								className="h-full w-full object-contain"
							/>
						</div>
						<div className="w-full flex items-center justify-start">
							{"image" in product &&
								product.image?.map((img) => (
									<button
										onClick={() => setImage(urlFor(img).url())}
										type="button"
										key={img._key}
										className={`w-[60px] h-[60px] cursor-pointer flex items-center justify-center relative ${
											image === urlFor(img).url()
												? "opacity-100 border border-black"
												: "opacity-50"
										}`}
									>
										<Image
											fill
											className="w-full h-full object-contain"
											src={urlFor(img).url()}
											alt={product.name}
										/>
									</button>
								))}
						</div>
					</div>
					<div className="w-full p-3 flex flex-col items-start">
						<h1 className="text-4xl font-bold">{product.name}</h1>
						<p className="text-2xl font-bold">${product.price}</p>
						<p className="text-xl text-gray-600">
							{product.details || "Sin detalles"}
						</p>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default ProductDetails;

export const getStaticPaths: GetStaticPaths = async () => {
	const query = `*[_type == "products"] {
      slug {
        current
      }
    }
    `;

	const products: Product[] = await sanityClient.fetch<Product[]>(query);

	const paths = products.map((product) => ({
		params: {
			slug: product.slug.current,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { slug } = ctx.params as { slug: string };
	const query = `*[_type == "products" && slug.current == '${slug}'][0]`;

	const product = await sanityClient.fetch<Product>(query, { slug });

	if (!product) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			product,
		},
		revalidate: 86400,
	};
};
