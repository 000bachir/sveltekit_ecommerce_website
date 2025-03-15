import type { PageLoad } from './$types';
import type { Product } from '$lib/types/cartProduct';

export const load : PageLoad = async({fetch}) => {
    const urls = [
        "https://dummyjson.com/products/category/womens-watches",
        "https://dummyjson.com/products/category/womens-shoes",
        "https://dummyjson.com/products/category/womens-jewellery",
        "https://dummyjson.com/products/category/womens-bags",
    ]
    
    const results = await Promise.allSettled(
        urls.map((url) => fetch(url).then(res => res.json()))
    );

    const products : Product[] = results
        .filter((result): result is PromiseFulfilledResult<{ products: Product[] }> => result.status === "fulfilled") // Type guard
        .map(result => result.value.products) 
        .flat(); 

    return{
        products
    }
}
