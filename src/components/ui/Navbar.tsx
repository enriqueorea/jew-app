import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoDiamondOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { useUiStore } from "~/store/ui.store";

export const Navbar = () => {
	const { isSidebarOpen, toggleSidebar } = useUiStore();
	return (
		<nav className="fixed w-full z-20">
			<div className="flex items-center justify-between px-8 py-3 bg-white  w-full">
				<div className="flex items-center">
					<div className="flex items-center">
						<button
							onClick={() => toggleSidebar()}
							type="button"
							className="text-[37px] md:text-[48px]"
						>
							{isSidebarOpen ? <AiOutlineClose /> : <BiMenuAltLeft />}
						</button>
					</div>
				</div>
				<div className="flex items-center">
					<div className="flex items-center">
						<Link href={"/"} className='text-[37px] md:text-[48px]'>
							<IoDiamondOutline />
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
