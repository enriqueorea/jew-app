import Head from "next/head";
import type { FC } from "react";
import { Navbar, Sidebar } from "../ui";

type Props = {
	children: React.ReactNode;
	title: string;
	description: string;
};

const HomeLayout: FC<Props> = ({ children, title, description }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<Navbar />
			<Sidebar />
			<main className="flex min-h-screen flex-col items-center justify-center bg-white relative">
				{children}
			</main>
		</>
	);
};

export default HomeLayout;
