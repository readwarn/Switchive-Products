import { ProductList } from "@/components/product-list";
import { EmptyProductState } from "@/components/empty-product-state";
import { loadProducts } from "@/actions/product";

export default async function HomePage() {
	const products = await loadProducts();

	return (
		<div className="container mx-auto py-10">
			<h1 className="text-2xl font-bold mb-10">Product Listing</h1>
			{products ? <ProductList products={products} /> : <EmptyProductState />}
		</div>
	);
}
