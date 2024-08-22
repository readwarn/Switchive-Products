import { Box } from "lucide-react";

export const EmptyProductState = () => {
	return (
		<div className="w-full h-[400px] grid place-items-center border rounded">
			<div className="space-y-6 grid place-items-center">
				<Box className="size-8" />
				<div className="space-y-2">
					<div className="font-semibold text-center">No products found</div>
					<div className="text-muted-foreground text-sm text-center">
						We do not have any products at this moment. Please check back later!
					</div>
				</div>
			</div>
		</div>
	);
};
