/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NextPage } from "next";
import MainLayout from "~/components/layouts/MainLayout";
import { ThreeDots } from "react-loader-spinner";
import { api } from "~/utils/api";
import { Categories, ProductList } from "~/components/Products";
import type { Category, Product } from "~/interfaces/Product.interface";
import { useState } from "react";

const ProductsPage: NextPage = () => {
	const { data, isLoading } = api.products.getProducts.useQuery<Product[]>();

	const [filteredProducts, setFilteredProducts] = useState<Product[] | null>();

	const handleFilter = (category: Category | null) => {
		if (category === null) {
			setFilteredProducts(data || []);
		} else {
			const filtered = data?.filter((product) =>
				product.category?.includes(category),
			);
			setFilteredProducts(filtered || []);
		}
	};

	return (
		<MainLayout
			title="Productos | Page"
			description="Lista de productos de la tienda"
		>
			<div className="mt-20 w-full">
				<Categories onFilter={handleFilter} />
				<div className="w-full">
					{isLoading ? (
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
							<ThreeDots
								height="80"
								width="80"
								radius="9"
								color="#ffc9d5"
								ariaLabel="three-dots-loading"
								wrapperStyle={{}}
								visible={true}
							/>
						</div>
					) : (
						<ProductList products={filteredProducts || data!} />
					)}
				</div>
			</div>
		</MainLayout>
	);
};
export default ProductsPage;
