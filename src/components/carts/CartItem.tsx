import type {FC} from "react";
import type {ICart} from "../../models/cart/ICart.ts";

type CartProps = {
    cart: ICart;
};

export const CartItem: FC<CartProps> = ({cart}) => {
    return (
        <li className="flex flex-col gap-1 items-start bg-white rounded-sm">
            <p className="w-full px-3 text-[18px] text-right bg-red-200 rounded-t-sm">Cart #{cart.id}</p>
            <p className="w-full px-3 text-[16px] text-right">User #{cart.userId}</p>
            <p className="px-3 text-lg">Products:</p>
            <ul className="px-3 text-left">
                {
                    cart.products.map((product) => (
                        <li className="px-3 text-lg" key={product.id}>- {product.title}.</li>
                    ))
                }
            </ul>
            <p className="px-3 text-lg text-red-800">Total to pay: {cart.discountedTotal}$</p>
        </li>
    );
};
