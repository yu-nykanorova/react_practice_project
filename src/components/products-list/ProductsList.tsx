import {ProductItem} from "../product-item/ProductItem.tsx";
import {useEffect, useState} from "react";
import {loadAuthResource, refresh} from "../../services/api.service.ts";
import type {IProduct, IProductsObjModel} from "../../models/IProduct.ts";

export const ProductsList = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {

        // виклик універсальної функції для завантаження даних про продукти із захищеного ресурсу
        // <IProductsObjModel> - зазначення типу даних, які очікуються від api
        // /products - ендпоінт, на який відправляється GET запит
        loadAuthResource<IProductsObjModel>("/products")
            // у разі успішності запиту
            .then(data => {
                // масив продуктів зберігається у стейт компоненту
                setProducts(data.products);
                console.log(data.products);
            })
            // у разі помилки (зокрема протермінування accessToken)
            .catch(reason => {
                // виводиться інформація про помилку у консоль
                console.log(reason);
                // спроба відновити accessToken за допомогою refreshToken
                refresh()
                    // після успішного оновлення токену відправляється повторний запит на отримання продуктів і, у разі його успішності, - запис у стейт компоненту
                    .then(() => loadAuthResource<IProductsObjModel>("/products"))
                    .then(data => setProducts(data.products));
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
