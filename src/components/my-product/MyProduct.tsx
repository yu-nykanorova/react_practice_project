import type {FC} from "react";
import type {IProduct} from "../../models/Product.ts";

type MyPropsType = {
    product: IProduct;
}

const MyProduct: FC<MyPropsType> = ({product}) => {
    return (
        <>
            <div className="mb-5 p-8 flex justify-between items-center border-b-2 border-solid border-gray-200">
                <h2 className="capitalize">{product.title} - {product.price} UAH</h2>
                <img className="max-w-full w-40 h-40 object-cover" src={product.image} alt={product.title}/>
            </div>
        </>
    )
}

export default MyProduct;