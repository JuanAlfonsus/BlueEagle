import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer } from '@react-google-maps/api'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserDistance } from '../../stores/actions/actionUser'
import Loader from '../Loader'

export default function MapDirections() {
    // Google Map
    const api_key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    const [libraries, setLibraries] = useState(['places'])

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: api_key,
        libraries
    })


    const [currentLocation, setCurrentLocation] = useState(null);
    const [map, setMap] = useState( /** @type google.maps.Map */(null))
    const [directions, setDirections] = useState(null)

    /** @type React.MutableRefObject<HtmlInputElement> */
    const originRef = useRef()

    /** @type React.MutableRefObject<HtmlInputElement> */
    const destinationRef = useRef()

    const handleCalcRoute = async () => {
        try {
            if (originRef.current.value === '' || destinationRef.current.value === '') return

            const directionService = new google.maps.DirectionsService()
            const res = await directionService.route({
                origin: originRef.current.value,
                destination: destinationRef.current.value,
                travelMode: google.maps.TravelMode.DRIVING
            })

            setDirections(res)
            dispatch(setUserDistance({
                distance: res.routes[0].legs[0].distance.text,
                origin: originRef.current.value,
                destination: destinationRef.current.value
            }))
        } catch (error) {
            console.log(error)
        }
    }



    // Section bottom
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleContinue = (e) => {
        e.preventDefault()

        navigate('/fleet')
    }

    useEffect(() => {
        if (isLoaded) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCurrentLocation({ lat: latitude, lng: longitude });
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        }
    }, [isLoaded]);

    if (!isLoaded) {
        return <Loader />
    }

    return (
        <>
            <div style={{ width: '100vw', height: '70vh', position: 'relative' }}>
                <GoogleMap
                    center={currentLocation}
                    zoom={15}
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    options={{
                        zoomControl: false,
                        streetView: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                        streetViewControl: false
                    }}
                    onLoad={(map) => setMap(map)}
                >
                    {directions && <DirectionsRenderer directions={directions} />}
                </GoogleMap>
                <div className="center-map-button" onClick={() => map.panTo(currentLocation)}>
                    <i className="fa-solid fa-location-dot"></i>
                </div>
            </div>


            {/* Section Bottom */}
            <div id="section-bottom">
                <div style={{ width: '100%' }}>
                    <div className="flex flex-column items-center" id="destination-form">

                        <div className='flex' style={{ gap: '20px', width: '100%' }}>
                            <div style={{ width: '100%', gap: '10px', display: 'flex', flexDirection: 'column' }}>
                                <Autocomplete>
                                    <input type="text" placeholder="Origin" style={{ width: '100%', marginBottom: '20px' }} className="bottom-form-input" ref={originRef} />
                                </Autocomplete>
                                <Autocomplete>
                                    <input type="text" placeholder="Destination" style={{ width: '100%' }} className="bottom-form-input" ref={destinationRef} />
                                </Autocomplete>
                            </div>
                            <div style={{ marginTop: '2px' }}>
                                <button className='button button-secondary' style={{ height: '30px' }} onClick={handleCalcRoute}>Set</button>
                            </div>
                        </div>


                        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px', width: '100%', gap: '20px' }}>
                            <button className="button button-secondary" id="schedule-button">Schedule</button>
                            <button type="submit" className="button button-primary continue-button" disabled={!directions} onClick={handleContinue}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}