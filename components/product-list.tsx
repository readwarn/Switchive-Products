"use client";

import type { Product } from "@/types";
import { ProductCard } from "./product-card";
import { ProductFilterRow } from "./product-filter-row";
import { useMemo, useState } from "react";

export const ProductList = ({ products }: { products: Product[] }) => {
	const [sortBy, setSortBy] = useState("price");
	const [filterBy, setFilterBy] = useState("");

	const sortedAndFilteredProducts = useMemo(() => {
		let result = [...products];

		// Filtering the product
		if (filterBy) {
			result = result.filter(
				(product) =>
					product?.title?.toLowerCase()?.includes(filterBy.toLowerCase()) ||
					product?.description
						?.toLowerCase()
						?.includes(filterBy.toLowerCase()) ||
					product?.category?.toLowerCase()?.includes(filterBy.toLowerCase()) ||
					product?.brand?.toLowerCase()?.includes(filterBy.toLowerCase()) ||
					product?.tags?.some((tag) =>
						tag?.toLowerCase()?.includes(filterBy.toLowerCase()),
					),
			);
		}

		// Sorting the product
		result.sort((a, b) => {
			if (sortBy === "price") return a.price - b.price;
			if (sortBy === "rating") return b.rating - a.rating;
			if (sortBy === "name") return a.title.localeCompare(b.title);
			return 0;
		});

		return result;
	}, [sortBy, filterBy, products]);

	return (
		<div>
			<ProductFilterRow
				initialSortType={sortBy}
				onSort={setSortBy}
				onSearch={setFilterBy}
			/>

			<div className="grid grid-cols-product-gallery gap-4">
				{sortedAndFilteredProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};
