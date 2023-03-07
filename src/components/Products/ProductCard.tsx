import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import type { Product } from "~/interfaces/Product.interface";
import { urlFor } from "~/utils/client";

type Props = {
	product: Product;
};

export const ProductCard: FC<Props> = ({ product }) => {
	return (
		<div className="flex flex-col items-center justify-center shadow-lg h-[350px] rounded-sm p-2 gap-2">
			<div className="relative w-60 h-36 rounded-md">
				<Image
					fill
					src={urlFor(product.image[0]!).url()}
					alt={product.slug.current}
					className="w-full h-full object-contain"
				/>
			</div>
			<div className="flex flex-col items-center justify-center">
				<h3 className="text-xl font-bold">{product.name}</h3>

				<p className="text-xl font-bold">${product.price}</p>
			</div>
			<Link
				className="
                mt-4
                bg-[#F7F7F7]
                text-[#333333]
                px-8
                py-2
                rounded-md
                text-lg
                hover:bg-[#333333]
                hover:text-[#F7F7F7]
                transition-all
                duration-300
                ease-in-out
                
            "
				href={`/products/${product.slug.current}`}
			>
				Ver detalles
			</Link>
		</div>
	);
};
