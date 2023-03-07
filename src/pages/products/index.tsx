/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NextPage } from "next";
import MainLayout from "~/components/layouts/MainLayout";
import { ThreeDots } from "react-loader-spinner";
import { api } from "~/utils/api";
import { ProductList } from "~/components/Products";
import type { Product } from "~/interfaces/Product.interface";

const ProductsPage: NextPage = () => {
	const { data, isFetching, isError } = api.products.getProducts.useQuery();

	return (
		<MainLayout title="Products" description="Products">
			{isFetching ? (
				<ThreeDots
					height="80"
					width="80"
					radius="9"
					color="#000000"
					ariaLabel="three-dots-loading"
					wrapperStyle={{}}
					visible={true}
				/>
			) : (
				<ProductList products={data as Product[]} />
			)}
		</MainLayout>
	);
};
export default ProductsPage;
