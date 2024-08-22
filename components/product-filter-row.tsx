import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export const ProductFilterRow = ({
	onSearch,
	onSort,
	initialSortType,
}: {
	onSearch: (keyword: string) => void;
	onSort: (type: string) => void;
	initialSortType?: string;
}) => {
	return (
		<div className="flex flex-col sm:flex-row justify-end items-center mb-8 gap-4">
			<Input
				placeholder="Filter products..."
				onChange={(e) => onSearch(e.target.value)}
				className="w-full sm:w-[400px]"
			/>
			<Select value={initialSortType} onValueChange={onSort}>
				<SelectTrigger className="w-full sm:w-[180px]">
					<SelectValue placeholder="Sort by" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="price">Price</SelectItem>
					<SelectItem value="rating">Rating</SelectItem>
					<SelectItem value="name">Name</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};
