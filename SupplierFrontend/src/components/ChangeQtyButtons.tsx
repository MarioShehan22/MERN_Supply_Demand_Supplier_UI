import {useShallow} from "zustand/react/shallow";
import {useStore} from "../store/store";
import React, {useEffect} from "react";
import {Minus, Plus} from "lucide-react";

type Props = { productId: string };

const ChangeQtyButtons:React.FC  = ({ productId }: Props) =>  {
    const { getProductById, decQty, incQty, setTotal } = useStore(
        useShallow((state) => ({
            getProductById: state.getProductById,
            decQty: state.decQty,
            incQty: state.incQty,
            setTotal: state.setTotal,
        }))
    );

    const product = getProductById(productId);

    useEffect(() => {
        const unSub = useStore.subscribe(
            (state) => state.products,
            (products) => {
                setTotal(
                    products.reduce((acc, item) => acc + item.purchasePrice * item.supply, 0)
                );
            },
            { fireImmediately: true }
        );
        return unSub;
    }, [setTotal]);

    return (
        <>
            {product && (
                <div className="flex gap-2 items-center">
                    <button onClick={() => decQty(product?._id as string)} size="icon">
                        <Minus />
                    </button>
                    <p>{product.supply}</p>
                    <button onClick={() => {incQty(product?._id as string);}} size="icon">
                        <Plus />
                    </button>
                </div>
            )}
        </>
    );
}
export default ChangeQtyButtons;
