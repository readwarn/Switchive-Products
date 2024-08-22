export default function LoadingProducts() {
	return (
		<div className="container mx-auto py-10">
			<h1 className="text-2xl font-bold mb-10">Product Listing</h1>
			<div className="grid grid-cols-product-gallery gap-4 mt-8">
				{[1, 2, 3, 4, 5, 6].map((item) => (
					<div
						key={item}
						className="w-full h-64 bg-muted-foreground/10 rounded-md animate-pulse"
					/>
				))}
			</div>
		</div>
	);
}
