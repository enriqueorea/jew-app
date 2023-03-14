import Link from "next/link";
import React from "react";
import HomeLayout from "~/components/layouts/MainLayout";
import { BsInstagram, BsFillTelephoneFill, BsFacebook } from "react-icons/bs";

const ContactPage = () => {
	return (
		<HomeLayout
			description='Página de contacto de la tienda'
			title='Contacto | Page'
		>
			<div className="w-full h-[100dvh] grid place-content-center">
				<div className="w-[320px] h-[400px] shadow-2xl p-4 flex flex-col items-center gap-5 rounded-2xl">
					<h1 className="text-4xl font-bold text-center">Contacto</h1>

					<Link
						target={"_blank"}
						href={"tel:2281728297"}
						className="flex items-center gap-5"
					>
						<BsFillTelephoneFill className="text-primary text-3xl" />
						<span>228 172 8297</span>
					</Link>
					<div className="flex flex-col items-center gap-4">
						<h3 className="text-2xl font-semibold">Redes Sociales</h3>
						<Link
							target={"_blank"}
							href={"https://www.facebook.com/adamaris.perez.12720"}
							className="flex items-center gap-5"
						>
							<BsFacebook className="text-primary text-3xl" />
							<span>Facebook</span>
						</Link>
						<Link
							target={"_blank"}
							href={"https://www.instagram.com/adamaris_ph"}
							className="flex items-center gap-5"
						>
							<BsInstagram className="text-primary text-3xl" />
							<span>Instagram</span>
						</Link>
					</div>
				</div>
			</div>
		</HomeLayout>
	);
};

export default ContactPage;
