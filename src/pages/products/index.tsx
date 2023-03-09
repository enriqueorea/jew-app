/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NextPage } from "next";
import MainLayout from "~/components/layouts/MainLayout";
import { ThreeDots } from "react-loader-spinner";
import { api } from "~/utils/api";
import { ProductList } from "~/components/Products";
import type { Product } from "~/interfaces/Product.interface";

const ProductsPage: NextPage = () => {
	const { data, isLoading } = api.products.getProducts.useQuery();

	return (
		<MainLayout title="Products" description="Products">
			{isLoading ? (
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<ThreeDots
						height="80"
						width="80"
						radius="9"
						color="#b1b1b1"
						ariaLabel="three-dots-loading"
						wrapperStyle={{}}
						visible={true}
					/>
				</div>
			) : (
				<ProductList products={data as Product[]} />
			)}
		</MainLayout>
	);
};
export default ProductsPage;
