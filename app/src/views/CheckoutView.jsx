import { useSelector } from "react-redux"


export default function CheckoutView() {
    const total = useSelector((state) => state.total)

    console.log(total)
    return (
        <>
            <h1>Checkout</h1>
        </>
    )
}