import { type NextPage } from "next";
import HomeLayout from "~/components/layouts/MainLayout";
import { Hero } from "~/components/ui";

const Home: NextPage = () => {
	return (
		<HomeLayout title="Home Page" description="Welcome to the store">
			<Hero />
		</HomeLayout>
	);
};

export default Home;
