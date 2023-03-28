import { type NextPage } from "next";
import HomeLayout from "~/components/layouts/MainLayout";
import { Hero } from "~/components/ui";
import { api } from "~/utils/api";

const Home: NextPage = () => {
	api.products.getProducts.useQuery();
	return (
		<HomeLayout title="Home Page" description="Welcome to the store">
			<Hero />
		</HomeLayout>
	);
};

export default Home;
