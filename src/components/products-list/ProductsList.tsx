import {ProductItem} from "../product-item/ProductItem.tsx";
import {useEffect, useState} from "react";
import {loadAuthResource, refresh} from "../../services/api.service.ts";
import type {IProduct} from "../../models/IProduct.ts";

export const ProductsList = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        loadAuthResource<IProduct>("/products", "products")
            .then(data => {
                setProducts(data);
                console.log(data);
            }).catch(reason => {
            console.log(reason);

            refresh()
                .then(() => loadAuthResource<IProduct>("/products", "products"))
                .then(data => setProducts(data));
        });
    }, []);

    return (
        <>
            <h1 className="my-8 text-[30px] text-center">Products List</h1>
            <ul className="grid grid-cols-2 gap-4">
                {
                    products.map((product) => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }
            </ul>
        </>
    );
};
