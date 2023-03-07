import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import MainLayout from "~/components/layouts/MainLayout";
import type { Product } from "~/interfaces/Product.interface";
import { sanityClient, urlFor } from "~/utils/client";

interface IProps {
	product: Product;
}

const ProductDetails: NextPage<IProps> = ({ product }) => {
	const [image, setImage] = useState<string>(urlFor(product.image[0]!).url());
	if (!product)
		return (
			<ThreeDots
				height="80"
				width="80"
				radius="9"
				color="#000000"
				ariaLabel="three-dots-loading"
				wrapperStyle={{}}
				visible={true}
			/>
		);
	return (
		<MainLayout title={product.name} description={product.details}>
			<div className="flex h-[100vh] flex-col md:flex-row items-center justify-center gap-4">
				<div className="flex-1 flex flex-col gap-4 items-center">
					<div className="relative w-[450px] h-[450px]">
						<Image
							src={image}
							alt={product.slug.current}
							fill
							className="h-full w-full object-contain"
						/>
					</div>
					<div className="w-full flex items-center justify-start">
						{product.image.map((img) => (
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
				<div className="flex-1 p-3 w-full flex flex-col items-start">
					<h1 className="text-4xl font-bold">{product.name}</h1>
					<p className="text-2xl font-bold">${product.price}</p>
					<p className="text-xl text-gray-600">{product.details}</p>
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

	const products = await sanityClient.fetch<Product[]>(query);

	const paths = products.map((product) => ({
		params: {
			slug: product.slug.current,
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { slug } = ctx.params as { slug: string };
	const query = `*[_type == "products" && slug.current == '${slug}'][0]`;

	const product = await sanityClient.fetch<Product>(query, { slug });
	return {
		props: {
			product,
		},
	};
};
