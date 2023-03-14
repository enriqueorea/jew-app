import type { Product } from "~/interfaces/Product.interface";
import type { FC } from "react";
import { ProductCard } from "./ProductCard";
interface Props {
	products: Product[];
}
export const ProductList: FC<Props> = ({ products }) => {
	if (!products.length)
		return (
			<h1 className="text-2xl font-bold text-center mt-20">
				No hay productos para esta categoría{" "}
			</h1>
		);
	return (
		<div className=" mt-24 grid grid-cols-fluid mx-auto h-full w-full gap-4 max-w-[90%]">
			{products.map((product) => (
				<ProductCard key={product._id} product={product} />
			))}
		</div>
	);
};
