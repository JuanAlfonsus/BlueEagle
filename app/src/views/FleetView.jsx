import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import FleetCard from "../components/ride/FleetCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFleetId, setFleetName, setUserTotal } from "../stores/actions/actionUser";
import Loader from "../components/Loader";


export default function FleetView() {
    // get distance from redux
    const distance = useSelector((state) => state.distance)

    // loading
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // get fleets from api
    const [fleets, setFleets] = useState([])
    const fetchFleet = async () => {
        try {
            setLoading(true)
            let response = await fetch('http://localhost:3001/fleet', {
                method: 'get',
            })

            response = await response.json()

            setFleets(response)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    // select fleet by id
    const [selectedOption, setSelectedOption] = useState(null)
    const handleOptionChange = (value) => {
        const { id, newTotal, name } = value
        setSelectedOption(id)
        dispatch(setUserTotal(newTotal))
        dispatch(setFleetName(name))
        dispatch(setFleetId(id))
    }


    const handleNavigate = () => {
        navigate('/booking')
    }

    // navigation guard
    useEffect(() => {
        if (!distance) {
            navigate('/ride')
        } else {
            fetchFleet()
        }
    }, [])



    return (
        <>
            <Navbar name={' Choose fleet '} withArrow={true} />
            {
                loading ? <Loader />
                    :
                    <section className="container-with-navbar">
                        <div className="card-container" id="fleet-container">
                            {
                                fleets.map((e, i) => {
                                    return (
                                        <FleetCard handleOptionChange={handleOptionChange} selectedOption={selectedOption} distance={distance} key={i} fleet={e} />
                                    )
                                })
                            }
                        </div>
                        <div style={{ padding: '20px' }}>
                            <button className="button button-primary continue-button" onClick={handleNavigate}>Continue</button>
                        </div>
                    </section>
            }
        </>
    )
}