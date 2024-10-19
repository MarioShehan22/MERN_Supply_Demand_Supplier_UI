import { useShallow } from "zustand/react/shallow";
import { useStore } from "../store/store";
import ChangeQtyButtons from "../components/ChangeQtyButtons";
import { CircleX, Trash2 } from 'lucide-react';

const Cart = () => {
    const { reset, products, removeProduct, total } = useStore(
        useShallow((state) => ({
            reset: state.reset,
            products: state.products,
            removeProduct: state.removeProduct,
            total: state.total,
        }))
    );

    return (
        <>
            <button
                className="no-underline block rounded px-3 py-3 text-white hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500 mr-2"
                data-popover-target="popover-default"
                type="button"
            >
                Cart
            </button>
            <div data-popover id="popover-default" role="tooltip"
                 className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                <div
                    className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Cart:</h3>
                </div>
                <div className="px-3 py-2">
                    <div className="overflow-y-scroll space-y-2 w-96 border">
                        <div className="flex gap-2 text-lg items-center">
                            <button
                                onClick={reset}
                                size="icon"
                                variant="destructive"
                            >
                                <CircleX />
                            </button>
                        </div>
                        <div className="space-y-2">
                            {products.map((product) => (
                                <div className="flex gap-3" key={Math.random().toString()}>
                                    <div className="flex flex-row items-center gap-2">
                                        <div>{product.ProductName as string}</div>
                                        <button
                                            onClick={() => removeProduct(product._id as string)}
                                            size="icon"
                                            variant="destructive"
                                        >
                                            <Trash2 />
                                        </button>
                                    </div>
                                    {/*<div>{product.showPrice as number}</div>*/}
                                    <div>
                                        <ChangeQtyButtons productId={product._id as string} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p>Total: {total}$</p>
                    </div>
                </div>
                <div data-popper-arrow></div>
            </div>
        </>
    );
};

export default Cart;
