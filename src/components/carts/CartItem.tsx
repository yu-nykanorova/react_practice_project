import type {FC} from "react";
import type {ICart} from "../../models/cart/ICart.ts";

type CartProps = {
    cart: ICart;
};

export const CartItem: FC<CartProps> = ({cart}) => {
    return (
        <li className="flex flex-col gap-1 items-start bg-white rounded-sm">
            <p className="w-full p-3 text-[18px] text-right bg-red-200 rounded-t-sm">Cart #{cart.id}</p>
            <p className="w-full p-3 text-[16px] text-right">User #{cart.userId}</p>
            <p className="w-full p-3 text-[20px] text-left font-semibold border-t border-red-400">Products:</p>
            <ul className="w-full px-3 pb-3 text-left border-b border-red-400">
                {
                    cart.products.map((product) => (
                        <li className="px-3 text-lg" key={product.id}>- {product.title}.</li>
                    ))
                }
            </ul>
            <p className="p-3 text-lg font-semibold">Total to pay: <span className="text-red-800">{cart.discountedTotal}$</span></p>
        </li>
    );
};
