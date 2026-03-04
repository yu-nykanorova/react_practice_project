import {useEffect, useState} from "react";
import type {ICart} from "../../models/cart/ICart.ts";
import {cartService} from "../../services/api.service.ts";
import {useParams} from "react-router-dom";
import {CartItem} from "./CartItem.tsx";

export const CartsList = () => {
    const [carts, setCarts] = useState<ICart[]>([]);
    const [loading, setLoading] = useState(false);
    const {userId} = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);

        if (!userId) {
            return;
        }

        const id = Number(userId);

        async function fetchData() {
            setLoading(true);
            const cartsObj = await cartService.getUserCartsById(id);
            setCarts(cartsObj.carts);
            setLoading(false);
        }
        fetchData();

    }, [userId]);

    if (loading) {
        return <div className="w-full mt-16 p-2 flex-[0_0_45%] text-xl text-red-200 font-semibold">Loading...</div>;
    }

    if (!loading && carts.length === 0) {
        return <div className="w-full mt-16 p-2 flex-[0_0_45%] text-2xl text-amber-200">User {userId} doesn't have any carts yet</div>;
    }

    return (
        <div>
            <h1 className="mb-6 text-xl text-white">Carts List of User {userId}</h1>
            <ul className="max-w-3/5 mx-auto p-2 flex flex-col gap-6 overflow-y-auto">
                {
                    carts.map((cart) => (
                        <CartItem key={cart.id} cart={cart}/>
                    ))
                }
            </ul>
        </div>
    );
};
