import type { Product } from "~/interfaces/Product.interface";
import type { FC } from "react";
import { ProductCard } from "./ProductCard";
interface Props {
	products: Product[];
}
export const ProductList: FC<Props> = ({ products }) => {
	return (
		<div className=" mt-24 grid grid-cols-fluid mx-auto h-full w-full gap-4 max-w-[90%]">
			{products.map((product) => (
				<ProductCard key={product._id} product={product} />
			))}
		</div>
	);
};
