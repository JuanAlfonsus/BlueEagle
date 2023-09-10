import { useSelector } from "react-redux"
import Navbar from "../components/Navbar"
import PaymentCard from "../components/ride/PaymentCard"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import { useNavigate } from "react-router-dom"


export default function CheckoutView() {
    // get state from redux
    const total = useSelector((state) => state.total)
    const origin = useSelector((state) => state.origin)
    const destination = useSelector((state) => state.destination)
    const fleetId = useSelector((state) => state.fleetId)

    const navigate = useNavigate()


    const [payments, setPayments] = useState([])
    const [loading, setLoading] = useState(false)

    const convertIdr = (number) => {
        let res = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
        return res.split(',')[0]
    }

    // select payment method by id
    const [selectedOption, setSelectedOption] = useState(null)
    const handleOptionChange = (value) => {
        const { id, name } = value
        setSelectedOption(id)
    }

    // fetch payment method
    const fetchPayment = async () => {
        try {
            setLoading(true)
            let response = await fetch('http://localhost:3001/payment', {
                method: 'get'
            })
            response = await response.json()

            setPayments(response)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    // hit api checkout
    const handleCheckout = async () => {
        try {
            setLoading(true)
            const data = {
                total,
                payment_id: selectedOption,
                origin,
                destination,
                fleetId
            }

            let response = await fetch('http://localhost:3001/checkout', {
                method: 'post',
                body: data
            })

            response = await response.json()
            
            navigate('/waiting-arrive')
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPayment()
    }, [])

    return (
        <>
            <Navbar name={' Checkout '} withArrow={true} />
            {
                loading ? <Loader />
                    :
                    <div className="container-with-navbar">
                        <div className="card-container">
                            <h3>Choose Payment: </h3>
                            {
                                payments.map((e, i) => {
                                    return (
                                        <PaymentCard key={i} payment={e} handleOptionChange={handleOptionChange} selectedOption={selectedOption} />
                                    )
                                })
                            }
                            <div className="flex items-center" style={{ gap: '70px', fontWeight: 'bold', fontSize: '18px', color: '#48034F' }}>
                                <p>Grand Total</p>
                                <p>{convertIdr(total)}</p>
                            </div>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <button className="button button-primary continue-button" onClick={handleCheckout}>Checkout</button>
                        </div>
                    </div>
            }
        </>
    )
}