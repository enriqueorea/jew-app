import Link from "next/link";
import { useUiStore } from "~/store/ui.store";

export const Sidebar = () => {
	const { isSidebarOpen } = useUiStore();
	return (
		<div
			className={`flex flex-col items-center absolute z-10 h-full overflow-hidden ${
				isSidebarOpen
					? "w-full  border border-l border-t-0 border-black md:w-[350px]"
					: "w-0"
			} h-screen bg-white`}
		>
			<div className="flex flex-col items-center justify-around w-full h-[70%] gap-4">
				<Link
					className="text-2xl font-bold text-center text-gray-700 hover:text-gray-900"
					href={"/"}
				>
					Inicio
				</Link>
				<Link
					className="text-2xl font-bold text-center text-gray-700 hover:text-gray-900"
					href={"/products"}
				>
					Catalogo
				</Link>
				<Link
					className="text-2xl font-bold text-center text-gray-700 hover:text-gray-900"
					href={"/contact"}
				>
					Contacto
				</Link>
			</div>
		</div>
	);
};
