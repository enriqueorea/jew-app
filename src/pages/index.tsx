import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import HomeLayout from "~/components/layouts/MainLayout";
import { Hero } from "~/components/ui";

import { api } from "~/utils/api";

const Home: NextPage = () => {
	const hello = api.example.hello.useQuery({ text: "from tRPC" });

	return (
		<HomeLayout title="Home Page" description="Welcome to the store">
			<Hero />
		</HomeLayout>
	);
};

export default Home;
