import type {IProduct} from "../../models/productModel.ts";
import type {FC} from "react";
import {RatingStar} from "../UI/RatingStar.tsx";
import {ReviewItem} from "./ReviewItem.tsx";

type ProductItemProps = {
    product: IProduct;
}

export const ProductItem: FC<ProductItemProps> = ({product}) => {
    return (
        <li className="px-6 py-4 shadow-sm bg-gray-50 rounded-sm">
            <p className="text-xl text-blue-800 font-semibold border-b border-b-blue-800">ID: {product.id}</p>
            <div className="my-6 flex gap-6">
                <div className="relative flex-[0_0_30%]">
                    <img className="shadow-md" src={product.thumbnail} alt={product.title}/>
                    <RatingStar className="absolute bottom-0 left-0 bg-gray-200 rounded-tr-lg" rating={product.rating} />
                </div>
                <div className="flex-[0_0_70%]">
                    <h2 className="text-xl font-semibold text-red-900">{product.title} <span className="font-normal text-lg">({product.sku})</span></h2>
                    <h3 className="text-gray-500">Brand: <span className="text-lg font-semibold text-black">{product.brand}</span></h3>
                    <p>(category: {product.category})</p>
                    <p className="my-4 font-semibold text-2xl">{product.price} y.e. <span className="text-lg text-red-700 font-normal">(discount: {product.discountPercentage})</span></p>
                    <p>{product.availabilityStatus}</p>
                    <p>Available: {product.stock} piece(s)</p>
                </div>
            </div>
            <div>
                <h3 className="mt-6 text-xl text-blue-800 font-semibold">Description</h3>
                <p className="my-4 text-lg">{product.description}</p>
            </div>
            <div className="p-2 flex gap-2 bg-gray-300">
                {
                    product.tags.map((tag, index) => (
                        <a href="#" className="text-[18px]" key={index}>#{tag}</a>
                    ))
                }
            </div>
            <div className="flex justify-evenly">
                <div className="text-center">
                    <h3 className="mt-6 mb-2 text-xl text-blue-800 font-semibold">Characteristic</h3>
                    <p>Weight: {product.weight}</p>
                    <p>Width: {product.dimensions.width}</p>
                    <p>Height: {product.dimensions.height}</p>
                    <p>Weight: {product.dimensions.depth}</p>
                </div>
                <div className="text-center">
                    <h3 className="mt-6 mb-2 text-xl text-blue-800 font-semibold">Order rules</h3>
                    <p>{product.warrantyInformation}</p>
                    <p>{product.shippingInformation}</p>
                    <p>{product.returnPolicy}</p>
                </div>
            </div>
            <div>
                <h3 className="my-6 text-xl text-blue-800 font-semibold text-center">Reviews</h3>
                <ul className="grid grid-cols-2 gap-6">
                    {
                        product.reviews.map((review, index) => (
                            <ReviewItem key={index} review={review} />
                        ))
                    }
                </ul>
            </div>
            <div className="flex justify-between items-end">
                <div>
                    <h3 className="mt-6 text-red-800 font-semibold">Meta information</h3>
                    <p>Created: {product.meta.createdAt}</p>
                    <p>Updated: {product.meta.updatedAt}</p>
                    <p>Barcode: {product.meta.barcode}</p>
                </div>
                <img src={product.meta.qrCode} alt="QR code" className="w-20 h-20"/>
            </div>
        </li>
    );
};
