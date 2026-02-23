import {useEffect, useState} from "react";
import type {IProduct, IProductsObjModel} from "../../models/productModel.ts";
import {getDataService} from "../../services/api.service.ts";
import {ProductItem} from "../product-item/ProductItem.tsx";

const productsUrl = import.meta.env.VITE_API_URL + "products";

export const ProductsList = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        async function fetchData(){
            const productsObj = await getDataService<IProductsObjModel>(productsUrl);
            setProducts(productsObj.products);
        }
        fetchData();
    }, []);

    return (
        <>
            <h1 className="mb-8 text-3xl font-semibold text-gray-700">Products List</h1>
            <ul className="max-w-300 flex flex-col gap-4">
                {
                    products.map((item) => (
                        <ProductItem key={item.id} product={item}/>
                    ))
                }
            </ul>
        </>
    );
};
