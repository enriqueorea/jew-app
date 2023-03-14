import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import type { Product } from "~/interfaces/Product.interface";
import { urlFor } from "~/utils/client";

type Props = {
	product: Product;
};

export const ProductCard: FC<Props> = ({ product }) => {
	const producImage = product.image
		? urlFor(product.image[0]!).url()
		: "/herovariant.png";

	return (
		<div className="flex flex-col items-center justify-center shadow-lg h-[350px] rounded-sm p-2 gap-2">
			<div className="relative w-60 h-36 rounded-md">
				<Image
					fill
					src={producImage}
					alt={product.slug?.current || product.name}
					className="w-full h-full object-contain"
					sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
				/>
			</div>
			<div className="flex flex-col items-center justify-center text-center">
				<h3 className="text-xl font-bold">{product.name}</h3>

				<p className="text-xl font-bold">${product.price}</p>
			</div>
			<Link
				className="
                mt-4
                bg-[#F7F7F7]
                text-[#333333]
				border 
				border-primary
                px-8
                py-2
                rounded-md
                text-lg
                hover:bg-primary
                hover:text-[#333333]
                transition-all
                duration-300
                ease-in-out
                
            "
				href={`/products/${product.slug?.current}`}
			>
				Ver detalles
			</Link>
		</div>
	);
};
