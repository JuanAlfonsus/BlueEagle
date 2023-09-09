

export default function MapDirections() {
    const api_key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    const origin = 'New+York,NY'
    const destination = 'Los+Angeles,CA'

    const embedUrl = `https://www.google.com/maps/embed/v1/directions?key=${api_key}&origin=${origin}&destination=${destination}`;

    return (
        <>
            <div style={{ width: '100%' }}>
                <iframe
                    title="Google Maps Directions"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    src={embedUrl}
                    allowFullScreen
                ></iframe>
            </div>
        </>
    )
}