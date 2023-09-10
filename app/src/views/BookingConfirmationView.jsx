import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingConfirmationView() {
    const navigate = useNavigate()

    // get state from redux
    const fleetName = useSelector((state) => state.fleetName)
    const origin = useSelector((state) => state.origin)
    const destination = useSelector((state) => state.destination)
    const total = useSelector((state) => state.total)

    const convertIdr = (number) => {
        let res = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
        return res.split(',')[0]
    }

    const handleNavigate = () => {
        navigate('/checkout')
    }

    // navigation guard
    useEffect(() => {
        if (!total) {
            navigate('/ride')
        }
    }, [])

    return (
        <>
            <Navbar name={' Booking '} withArrow={true} />
            <section className="container-with-navbar">
                <div id="booking-container">
                    <div className="container-content">
                        <h3>Booking Details: </h3>
                        <div style={{ gap: '20px', display: 'flex', flexDirection: 'column' }}>
                            <div className="booking-wrap">
                                <span className="booking-text-content">Name</span>
                                <span className="booking-text-content">{localStorage.name}</span>
                            </div>
                            <div className="booking-wrap">
                                <span className="booking-text-content">Fleet Type</span>
                                <span className="booking-text-content">{fleetName}</span>
                            </div>
                            <div className="booking-wrap">
                                <span className="booking-text-content">Origin</span>
                                <span className="booking-text-content">{origin}</span>
                            </div>
                            <div className="booking-wrap">
                                <span className="booking-text-content">Destination</span>
                                <span className="booking-text-content">{destination}</span>
                            </div>
                            <div className="booking-wrap">
                                <span className="booking-total">Total</span>
                                <span className="booking-total">{convertIdr(total)}</span>
                            </div>
                        </div>
                        <div style={{ padding: '20px', marginTop: '30vh' }}>
                            <button className="button button-primary continue-button" onClick={handleNavigate}>Continue</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}