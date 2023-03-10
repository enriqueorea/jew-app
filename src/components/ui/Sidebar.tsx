import Link from "next/link";
import { sidebarLinks } from "~/constants";
import { useUiStore } from "~/store/ui.store";

export const Sidebar = () => {
	const { isSidebarOpen, toggleSidebar } = useUiStore();
	return (
		<div
			className={`flex flex-col items-center absolute z-10 h-full overflow-hidden ${
				isSidebarOpen
					? "w-full  border border-l border-t-0 border-black md:w-[350px]"
					: "w-0"
			} h-screen bg-white`}
		>
			<div className="flex flex-col items-center justify-around w-full py-20 h-[70%] gap-4">
				{sidebarLinks.map((link) => (
					<Link
						onClick={() => toggleSidebar()}
						key={link.name}
						className="text-2xl font-bold text-center text-gray-700 hover:text-gray-900"
						href={link.href}
					>
						{link.name}
					</Link>
				))}
			</div>
		</div>
	);
};
