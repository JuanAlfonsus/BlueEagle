import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import FleetCard from "../components/ride/FleetCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function FleetView() {
    // get distance from redux
    const distance = useSelector((state) => state.distance)

    const navigate = useNavigate()

    const [fleets, setFleets] = useState([])

    const fetchFleet = async () => {
        try {
            let response = await fetch('http://localhost:3001/fleet', {
                method: 'get',
            })

            response = await response.json()

            setFleets(response)
        } catch (error) {
            console.log(error)
        }
    }

    // navigation guard
    useEffect(() => {
        if (!distance) {
            navigate('/ride')
        } else {
            fetchFleet()
        }
    }, [])

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }

    return (
        <>
            <Navbar name={' Choose fleet '} withArrow={true} />
            <section className="container-with-navbar">
                <div className="card-container" id="fleet-container">
                    {
                        fleets.map((e, i) => {
                            return <FleetCard key={i} fleet={e} />
                        })
                    }
                </div>
            </section>
        </>
    )
}