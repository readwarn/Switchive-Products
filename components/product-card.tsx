import type { Product } from "@/types";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ProductCard = ({ product }: { product: Product }) => {
	return (
		<Card
			key={product.id}
			className="flex flex-col cursor-pointer [&_img]:hover:scale-105 "
		>
			<CardHeader>
				<img
					src={product.thumbnail}
					alt={product.title}
					className="w-full h-48 object-cover mb-2 rounded-md transition-transform"
				/>
				<CardTitle>{product.title}</CardTitle>
			</CardHeader>
			<CardContent className="flex-grow">
				<p className="text-sm text-gray-600 mb-2">{product.description}</p>
				<div className="flex justify-between items-center mb-2">
					<span className="font-bold">${product.price.toFixed(2)}</span>
					<div className="flex items-center">
						<StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
						<span>{product.rating.toFixed(2)}</span>
					</div>
				</div>
				<div className="flex flex-wrap gap-1 mb-2">
					{product.tags.map((tag) => (
						<Badge key={tag}>{tag}</Badge>
					))}
				</div>
				<p className="text-sm">Brand: {product.brand}</p>
				<p className="text-sm">SKU: {product.sku}</p>
				<p className="text-sm">Availability: {product.availabilityStatus}</p>
			</CardContent>
			<CardFooter className="flex justify-between items-center">
				<span className="text-sm">{product.shippingInformation}</span>
				<span className="text-sm">{product.warrantyInformation}</span>
			</CardFooter>
		</Card>
	);
};
