import type { Product } from "$lib/types/cartProduct";
import type { PageLoad } from "./$types";


export const load: PageLoad = async ({ fetch }) => {
    const urls = [
        "https://dummyjson.com/products/category/mens-shirts",
        "https://dummyjson.com/products/category/mens-watches",
        "https://dummyjson.com/products/category/mens-shoes",
    ];

    // Ensure fetch calls are properly returned
    const results = await Promise.allSettled(
        urls.map((url) => fetch(url).then(res => res.json()))
    );

    // Fix: Correctly type the results before mapping
    const products: Product[] = results
        .filter((result): result is PromiseFulfilledResult<{ products: Product[] }> => result.status === "fulfilled") // Type guard
        .map(result => result.value.products) // Extract `products`
        .flat(); // Flatten into a single array

    return {
        products
    };
};
