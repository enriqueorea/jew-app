import { FC, useState } from "react";
import { categories } from "~/constants";
import type { Category } from "~/interfaces/Product.interface";

interface IProps {
	onFilter: (category: Category | null) => void;
}

export const Categories: FC<IProps> = ({ onFilter }) => {
	const [categoryValue, setCategoryValue] = useState<Category | null>();

	const handleFilter = (category: Category | null) => {
		if (categoryValue === category) {
			setCategoryValue(null);
			onFilter(null);
		} else {
			setCategoryValue(category);
			onFilter(category);
		}
	};

	return (
		<div className="flex items-center justify-center gap-5">
			{categories.map((category) => (
				<button
					onClick={() => handleFilter(category.value as Category)}
					key={category.value}
					type="button"
					className={`px-2 py-1 border border-primary rounded-lg hover:bg-primary ${
						categoryValue === category.value ? "bg-primary" : ""
					}`}
				>
					<h1>{category.title}</h1>
				</button>
			))}
		</div>
	);
};
