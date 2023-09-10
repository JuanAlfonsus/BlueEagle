import { useSelector } from "react-redux"
import Navbar from "../components/Navbar"


export default function CheckoutView() {
    const total = useSelector((state) => state.total)

    console.log(total)
    return (
        <>
            <Navbar name={' Checkout '} withArrow={true} />
        </>
    )
}