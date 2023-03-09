/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Section } from ".";

export const Hero = () => {
	return (
		<Section>
			<div className="flex flex-col md:flex-row bg-gray-100 mx-auto">
				<div className="w-full md:w-1/2 bg-white">
					<img
						src="/hero.png"
						alt="Brazaletes"
						className="w-full h-auto object-cover"
					/>
				</div>
				<div className="flex-1 flex flex-col justify-center items-center w-full md:w-1/2 p-8">
					<h1 className="text-4xl font-bold mb-8 text-center md:text-left">
						Descubre la belleza de nuestra joyería Pandora
					</h1>
					<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
						<Link
							href={"/products"}
							className="text-2xl px-8 p-4 border border-black rounded-md bg-black text-white"
						>
							Catálogo
						</Link>
						<button className="text-2xl px-8 p-4 border border-black rounded-md hover:bg-black hover:text-white">
							Contacto
						</button>
					</div>
				</div>
			</div>
		</Section>
	);
};
